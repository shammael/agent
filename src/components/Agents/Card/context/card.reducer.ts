import { IAgent } from "../../../../types/Agent";

export interface ICardAgentState {
  agent: Omit<IAgent, "reviews">;
}

type ActionType = { type: "Init Agent State"; payload: IAgent };

const cardReducer = (
  state: ICardAgentState,
  action: ActionType
): ICardAgentState => {
  switch (action.type) {
    case "Init Agent State":
      return {
        agent: action.payload,
      };
    default:
      return state;
  }
};

export default cardReducer;
