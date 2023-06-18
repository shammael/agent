import useAppStore from "../../../store/app.store";
import styles from "./index.module.css";

const JoinButton = () => {
  const setModal = useAppStore((state) => state.setModalOpen);
  return (
    <button onClick={() => setModal(true)} className={styles.button}>
      Join the team 😀
    </button>
  );
};

export default JoinButton;
