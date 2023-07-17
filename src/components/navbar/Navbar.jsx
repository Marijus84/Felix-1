import logo from "../../assets/images/logo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <img src={logo} alt="Felix logo" />
      </a>
    </nav>
  );
};

export default Navbar;
