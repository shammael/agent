import { useContext } from "react";

import Avatar from "../../../Avatar";
import CardContext from "../context/card.context";
import Info from "./Info";

const Profile = () => {
  const { agent } = useContext(CardContext);
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: 4,
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Avatar profileImgurl={agent.photoUrl} />
        <Info
          agentLicence={agent.agentLicence}
          firstName={agent.firstName}
          lastName={agent.lastName}
        />
      </div>
    </div>
  );
};

export default Profile;
