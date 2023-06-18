import Agents from "../components/Agents/Agents";
import Modal from "../components/Modal";
import TeamForm from "../components/TeamForm";

const HomePage = () => {
  return (
    <>
      <main style={{ padding: "10px" }}>
        <Agents />
      </main>
      <Modal>
        <TeamForm />
      </Modal>
    </>
  );
};

export default HomePage;
