import { movies } from "../../data";
import Card from "../card/Card";
import style from "./Movies.module.css";

const Movies = () => {
  return (
    <div className={style.moviesContainer}>
      {movies.map((movie) => {
        return (
          <Card
            key={movie.id}
            title={movie.title}
            description={movie.description.substring(0, 55)}
            image={movie.image}
          />
        );
      })}
    </div>
  );
};

export default Movies;
