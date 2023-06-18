import React, { PropsWithChildren } from "react";
import useAppStore from "../../store/app.store";
import styles from "./index.module.css";

interface Props {}

const Modal = ({ children }: PropsWithChildren<Props>) => {
  const { isOpen, setModal } = useAppStore((state) => ({
    isOpen: state.modalOpen,
    setModal: state.setModalOpen,
  }));

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div style={{ position: "relative" }}>
        <>{children}</>
        <button onClick={() => setModal(false)} className={styles.close}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
