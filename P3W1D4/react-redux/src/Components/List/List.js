import { useSelector } from "react-redux";
export default function List() {
  const movies = useSelector((state) => state.movies);
  return movies.length
    ? movies.map((el) => <p key={el.title}>{el.title}</p>)
    : "no movies";
}
