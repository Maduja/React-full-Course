import { useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  fetch("http://localhost:3001/posts/" + id)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setPost(data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      { post && <div>
        Details:{id}
        <h2>{post.title}</h2>
        <h4>{post.body}</h4>
      </div>}
    </div>
  );
}

export default Details;
