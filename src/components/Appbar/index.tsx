import { JoinButton } from "../Buttons";
import Container from "../Container";
import Logo from "../Logo";
import Search from "../Search";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <div style={{ backgroundColor: "#0c4a6e" }}>
      <Container>
        <div className={`${styles.container} ${styles.appbar}`}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Search />
            <JoinButton />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AppBar;
