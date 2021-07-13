import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../redux/actions/posts.action";

export default function List() {
  const list = useSelector((state) => state.posts.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="row my-5">
      {list.map((el) => (
        <div key={el._id} className="col-4">
          <Card {...el} isActive={true} />
        </div>
      ))}
    </div>
  );
}
