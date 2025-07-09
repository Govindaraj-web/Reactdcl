// Post.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch post");
        return response.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="m-4">Loading post...</p>;
  if (error) return <p className="m-4 text-danger">Error: {error}</p>;

  return (
    <div className="container m-5">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
