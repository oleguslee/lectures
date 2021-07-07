import { useParams, useLocation, useRouteMatch } from "react-router-dom";

export default function ItemInfo() {
  const location = useLocation();
  console.log(location);

  const routeMatch = useRouteMatch();
  console.log(routeMatch);

  let { bookId } = useParams();
  console.log(bookId);

  return <h2>ItemInfo</h2>;
}
