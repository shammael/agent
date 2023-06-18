const { faker } = require("@faker-js/faker");

const { Agent } = require("../server/model");

/* NOTE: THIS WILL DROP THE CURRENT DATABASE */
seed();

async function seed() {
  /* Create the table for the agents */
  await Agent.sync({ force: true });

  /* Insert the data */
  await Promise.all([
    Agent.create({
      firstName: faker.person.firstName("female"),
      lastName: faker.person.lastName("female"),
      photoUrl:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      agentLicence: parseInt(Math.random() * 100000),
      address: faker.location.streetAddress({ useFullAddress: true }),
      practiceAreas: ["Los Angeles", "San Diego", "New York", "Miami"].join(
        ","
      ),
      aboutMe: faker.lorem.paragraphs({ min: 1, max: 3 }),
    }),
    Agent.create({
      firstName: faker.person.firstName("male"),
      lastName: faker.person.lastName("male"),
      photoUrl:
        "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      agentLicence: parseInt(Math.random() * 100000),
      address: faker.location.streetAddress({ useFullAddress: true }),
      practiceAreas: ["San Diego"].join(","),
      aboutMe: faker.lorem.paragraphs({ min: 1, max: 3 }),
    }),
    Agent.create({
      firstName: faker.person.firstName("male"),
      lastName: faker.person.lastName("male"),
      photoUrl:
        "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      agentLicence: parseInt(Math.random() * 100000),
      address: faker.location.streetAddress({ useFullAddress: true }),
      practiceAreas: ["Miami", "New York"].join(","),
      aboutMe: faker.lorem.paragraphs({ min: 1, max: 3 }),
    }),
    Agent.create({
      firstName: faker.person.firstName("female"),
      lastName: faker.person.lastName("female"),
      photoUrl:
        "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      agentLicence: parseInt(Math.random() * 100000),
      address: faker.location.streetAddress({ useFullAddress: true }),
      practiceAreas: ["New York"].join(","),
      aboutMe: faker.lorem.paragraphs({ min: 1, max: 3 }),
    }),
  ]);
}
