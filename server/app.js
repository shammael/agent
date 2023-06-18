const express = require("express");
const { Agent } = require("./model");
const multer = require("multer");
const path = require("path");
// const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/assets/images"));
  },
  filename: function (req, file, cb) {
    const { firstName } = req.body;
    const ex = file.originalname.split(".").pop();
    cb(null, `${firstName}.${ex}`);
  },
});

const upload = multer({ storage });

app.get("/agents", async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

app.post("/agent", upload.single("file"), async (req, res, next) => {
  const user = await Agent.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    photoUrl: "/assets/images/" + req.file.filename,
    address: req.body.address,
    practiceAreas: req.body.practiceAreas,
    aboutMe: req.body.aboutMe,
    agentLicence: parseInt(Math.random() * 100000),
  });

  return res.status(201).json(user);
});

app.get("/agent/:id", async (req, res) => {
  const { id } = req.params;
  const agent = await Agent.findOne({ where: { id } });

  return res.json(agent);
});

app.post("/review/agent/:id", async (req, res) => {
  const { id } = req.params;
  const { review } = req.body;
  await Agent.update({ review: review }, { where: { id } });

  return res.json({ ok: true });
});

module.exports = app;
