import cards from "../../assets/images/cards.svg";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <p className={style.footerItem}>
        We care about your entertainment. Copyright © 2019–2020 felix.com
      </p>

      <div className={style.footerItem}>
        <img src={cards} alt="cards" />
      </div>
    </footer>
  );
};

export default Footer;
