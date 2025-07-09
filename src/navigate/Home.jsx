// Home.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch posts");
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="m-4">Loading posts...</p>;
  if (error) return <p className="m-4 text-danger">Error: {error}</p>;

  return (
    <div className="container">
      <h2 className="my-4">Posts</h2>
      <div className="row justify-content-center">
        {posts &&
          posts.map((post) => (
            <div
              key={post.id}
              className="card m-3"
              style={{ width: "18rem", cursor: "pointer" }}
              onClick={() => navigate("/post/" + post.id)}
            >
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
