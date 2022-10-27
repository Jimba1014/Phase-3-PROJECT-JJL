import { useHistory } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "./styles/Header.module.scss";

function Header() {
  const history = useHistory();
  return (
    <h1 className={styles.header} onClick={() => history.push("/")}>
      <img src={logo} />
      Webionary
    </h1>
  );
}
export default Header;
