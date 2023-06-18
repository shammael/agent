import React, { ComponentProps } from "react";
import styles from "./index.module.css";

const Input = (props: ComponentProps<"input">) => {
  return <input className={`${styles.input} ${props.className}`} {...props} />;
};

export default Input;
