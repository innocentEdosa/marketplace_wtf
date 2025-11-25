import Logo from "../logo";
import CartIcon from "../../assets/vector/cart";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Logo />
        <CartIcon />
      </nav>
    </header>
  );
};

export default Header;
