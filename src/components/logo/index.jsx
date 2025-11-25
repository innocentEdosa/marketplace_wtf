
import LogoIcon from "../../assets/logo.png"
import styles from "./logo.module.css"

const Logo = () => {
  return <a href="/" className={styles.logo}>
    <img src={LogoIcon} />
  </a>;
};

export default Logo;
