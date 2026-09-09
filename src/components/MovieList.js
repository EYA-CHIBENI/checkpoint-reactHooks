import MovieCard from "./MovieCard";
const MovieList = ({ movies, search, stars }) => {
  var filtre = movies.filter(
    (el, i, t) =>
      el.title.toLowerCase().includes(search.toLowerCase()) &&
      el.rating >= stars
  );
  return (
    <div className="cards">
      {filtre.lenght === 0
        ? alert("Not found")
        : filtre.map((el, i, t) => <MovieCard key={el.id} el={el}></MovieCard>)}
    </div>
  );
};

export default MovieList;
