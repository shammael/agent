import { FC, useState } from "react";
import { useEffect } from "react";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import AgentCard from "./Card";
import styles from "./agent.module.css";
import useAppStore from "../../store/app.store";
import { Link } from "react-router-dom";

type IAgentResponse = Omit<IAgent, "practiceAreas"> & { practiceAreas: string };

const Agents: FC = () => {
  const search = useAppStore((state) => state.search);
  const { agents, setAgents } = useAppStore((state) => ({
    agents: state.agents,
    setAgents: state.setAgents,
  }));

  useEffect(() => {
    async function fetchInitialData() {
      const response = (await axios.get("/agents")).data as IAgentResponse[];
      if (agents!.length > 0) {
        return;
      }
      setAgents(
        response.map((agent) => {
          return {
            ...agent,
            practiceAreas: agent.practiceAreas.split(","),
          };
        })
      );
    }
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredAgents = agents!.filter((agent) => {
    if (search.toLowerCase() === "") {
      return true;
    } else {
      const formattedSearch = search.toLowerCase().replace(/\s/g, "");
      const regex = new RegExp(`^${formattedSearch}`, "i");
      return agent.practiceAreas.some((practice) =>
        regex.test(practice.toLowerCase().replace(/\s/g, ""))
      );
    }
  });

  return (
    <div className={styles.agents}>
      {filteredAgents.map((agent) => (
        <Link
          style={{ textDecoration: "none" }}
          key={agent.id}
          to={`/agent/${agent.id}`}
        >
          <AgentCard agent={agent}>
            <AgentCard.Profile />
            <hr style={{ borderColor: "#f4f4f5", opacity: 0.5 }} />
            <AgentCard.Body />
          </AgentCard>
        </Link>
      ))}
    </div>
  );
};

export default Agents;
