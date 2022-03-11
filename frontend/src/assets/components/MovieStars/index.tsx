import { ReactComponent as StarFull } from "../../img/star-full.svg";
import { ReactComponent as StarHalf } from "../../img/star-half.svg";
import { ReactComponent as StarEmpty } from "../../img/star-empty.svg";
import "./styles.css";

function MovieStars() {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
}

export default MovieStars;
