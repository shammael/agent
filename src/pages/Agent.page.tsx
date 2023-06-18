import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Modal from "../components/Modal";
import TeamForm from "../components/TeamForm";
import { IAgent } from "../types/Agent";
import styles from "../styles/agent.module.css";
import ReviewForm from "../components/reviews/Form";

type IAgentResponse = Omit<IAgent, "practiceAreas"> & { practiceAreas: string };

const AgentPage = () => {
  const { id } = useParams();

  const [agent, setAgent] = useState<IAgent | null>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = (await (
        await axios.get(`/agent/${id}`)
      ).data) as IAgentResponse;
      setIsLoading(false);
      setAgent({
        ...response,
        practiceAreas: response.practiceAreas.split(","),
      });
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  isLoading && <div>Loading...</div>;

  console.log({ agent });

  return (
    <>
      <main style={{ display: "flex", padding: "10px" }}>
        <Container>
          <div className={styles.info}>
            <Avatar size="normal" profileImgurl={agent?.photoUrl!} />

            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <h2 style={{ minWidth: "200px", color: "#334155" }}>
                {agent?.firstName} {agent?.lastName}
              </h2>
              <h3 style={{ fontSize: "15px", color: "#94a3b8" }}>
                N° Licence: {agent?.agentLicence}
              </h3>
              <div>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#334155",
                    fontWeight: "600",
                  }}
                >
                  Practices Area
                </p>
                <p style={{ fontSize: "14px", color: "#94a3b8" }}>
                  {agent?.practiceAreas.join(" ° ")}
                </p>
                <div>
                  <h3>About me</h3>
                  <p style={{ maxWidth: "500px" }}>{agent?.aboutMe}</p>
                </div>
                <ReviewForm userID={agent?.id!} />
                <div className={styles.review}>
                  {
                    !agent?.review ? (
                      <p className={styles.no_reviews}>No reviews</p>
                    ) : (
                      <p>{agent.review}</p>
                    )
                    // <div style={{ color: "#a3a3a3" }}>review</div>
                  }
                </div>
                <div style={{}}></div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Modal>
        <TeamForm />
      </Modal>
    </>
  );
};

export default AgentPage;
