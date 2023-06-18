import styles from "./index.module.css";

type Props = {
  firstName: string;
  lastName: string;
  agentLicence: string;
};

const Info = ({ firstName, lastName, agentLicence }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2 className={styles.title}>
        {firstName} {lastName}
      </h2>
      <p className={styles.subtitle}> N° Licence: {agentLicence} ° </p>
    </div>
  );
};

export default Info;
