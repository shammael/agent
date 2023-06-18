import axios from "axios";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

interface Props {
  userID: string;
}

const ReviewForm = ({ userID }: Props) => {
  const [review, setReview] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ review });
    axios
      .post(
        `/review/agent/${userID}`,
        { review },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        navigate(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your review"
        className={styles.text_area}
        rows={3}
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
      <button
        type="submit"
        style={{
          padding: "10px 10px",
          backgroundColor: "#0369a1",
          border: "none",
          color: "#fff",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        Send
      </button>
    </form>
  );
};

export default ReviewForm;
