import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.spacesheep.blog/api/latest-posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts.</p>;

  return (
    <div>
      <div className="card card-body py-5 bg-secondary no-border-radius">
        <h2>Space Sheep</h2>
        <h3>Programming and personal blog.</h3>
      </div>
      <div className="card card-body py-5 no-border-radius">
        <h3>Latest Posts</h3>
        <div className="col">
          {posts.map((post) => (
            <div key={post.id} className="card h-100 mb-2">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  #{post.category}
                </h6>
                <div className="mb-1 text-muted card-text">
                  {post.writer} - {post.date}
                </div>
                <p className="card-text">{post.description}</p>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
