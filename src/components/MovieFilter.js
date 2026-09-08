import Button from "react-bootstrap/Button";
const MovieFilter = ({setSearch,setStars,search,stars}) => {
const reset=()=>{
    setSearch("")
    setStars(0)
}
  return <div className="search">
      <input value={search} type="text"  onChange={(e)=>setSearch(e.target.value)} /> 
      <input value={stars} type="number"  onChange={(e)=>setStars(e.target.value)}/> 
      <Button onClick={reset} variant="light">Reset</Button>
  </div>;
};
export default MovieFilter;
