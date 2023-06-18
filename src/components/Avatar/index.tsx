import React from "react";
import styles from "./index.module.css";

interface Props {
  profileImgurl: string;
  size?: "small" | "normal" | "big";
}

const Avatar = ({ profileImgurl, size = "small" }: Props) => {
  return (
    <div className={styles.avatar}>
      {size === "small" && (
        <img
          className={`${styles.image} ${styles.image_size_small}`}
          src={profileImgurl}
          alt="User profile"
        />
      )}
      {size === "normal" && (
        <img
          className={`${styles.image} ${styles.image_size_normal}`}
          src={profileImgurl}
          alt="User profile"
        />
      )}
    </div>
  );
};

export default Avatar;
