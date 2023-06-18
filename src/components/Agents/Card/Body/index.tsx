import { useContext } from "react";
import CardContext from "../context/card.context";

const Body = () => {
  const {
    agent: { aboutMe },
  } = useContext(CardContext);
  return (
    <div
      style={{
        color: "#525252",
        overflow: "hidden",
      }}
    >
      {aboutMe}
    </div>
  );
};

export default Body;
