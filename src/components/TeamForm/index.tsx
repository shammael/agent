import { useState } from "react";
import styles from "./index.module.css";
import Input from "../Input";
import useForm from "./hooks/use_form";
import ImageUploader from "../ImageUploader";

const TeamForm = () => {
  const { handleBlur, handleChange, handleSubmit, values, setValues } =
    useForm();
  const [practiceArea, setPracticeArea] = useState("");
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center", color: "#155e75" }}>Join Us 🙂</h2>
      <hr style={{ borderColor: "lightgray", opacity: 0.5 }} />
      <ImageUploader
        handleImage={(file) => {
          setValues({
            ...values,
            image: file,
          });
        }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="firstname" className={styles.label}>
          First Name
        </label>
        <Input
          id="firstname"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="lastname" className={styles.label}>
          Last Name
        </label>
        <Input
          id="lastname"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="address" className={styles.label}>
          Address
        </label>
        <Input
          id="address"
          name="address"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <label htmlFor="practice" className={styles.label}>
          Practice area
        </label>
        <Input
          id="practice"
          name="practice"
          onBlur={handleBlur}
          onChange={(e) => {
            setPracticeArea(e.target.value);
          }}
        />
        <ul style={{ display: "flex", padding: "0px 10px", gap: "4px" }}>
          {values.practiceAreas.map((value, index) => (
            <li
              key={index}
              style={{ listStyle: "none", fontSize: "13px", color: "#a3a3a3" }}
            >
              {value}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={styles.addPracticeButton}
          onClick={() => {
            if (practiceArea.length < 1) {
              return;
            }

            setValues({
              ...values,
              practiceAreas: [...values.practiceAreas, practiceArea],
            });
          }}
        >
          Add
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label className={styles.label}>About me</label>
        <textarea
          onChange={handleChange}
          name="aboutMe"
          rows={4}
          className={styles.text_area}
          style={{ padding: "10px" }}
        ></textarea>
      </div>
      <button className={styles.button} type="submit">
        Join
      </button>
    </form>
  );
};

export default TeamForm;
