import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const found = movies.find((el, i, t) => el.id == id);
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      <h1>{found.title}</h1>
      <h4>{found.description}</h4>
      <iframe
        width="560"
        height="315"
        src={found.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>    </div>
  );
};
export default MovieDescription;
