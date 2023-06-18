import { createContext } from "react";
import { IAgent } from "../../../../types/Agent";

interface Props {
  agent: IAgent;
}

const CardContext = createContext({} as Props);

export default CardContext;
