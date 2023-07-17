import style from "./Card.module.css";

const Card = ({ title, description, image }) => {
  return (
    <div className={style.card}>
      <img className={style.cardImage} src={image} alt={`${title} poster`} />
      <div>
        <h2>{title}</h2>
        <p>{description}...</p>
      </div>
    </div>
  );
};

export default Card;
