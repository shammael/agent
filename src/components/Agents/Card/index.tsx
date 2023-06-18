import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { IAgent } from "../../../types/Agent";
import CardProvider from "./context/card.provider";
import Profile from "./Profile";
import styles from "./index.module.css";
import Body from "./Body";

interface Props {
  agent: IAgent;
}

const AgentCard = ({ children, agent }: PropsWithChildren<Props>) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
  }, [agent]);

  return (
    <div className={styles.card}>
      {init ? (
        <CardProvider agent={agent}>{children}</CardProvider>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

AgentCard.Profile = Profile;
AgentCard.Body = Body;

export default AgentCard;
