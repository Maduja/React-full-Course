import { useEffect, useState } from "react";
import {Link,useNavigate} from "react-router-dom"

function Home() {

    const navigate = useNavigate()

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 5));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Latest Posts</h2>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
          onClick={()=>{navigate('/details/'+post.id)}}
        >
          <h3>{post.title}</h3>
          
        </div>
      ))}
    </div>
  );
}

export default Home;
