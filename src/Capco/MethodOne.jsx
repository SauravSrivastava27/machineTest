import React, { useState } from "react";
import MethodOneHooks from "./MethodOneHooks";
import Container from "./Container";

const MethodOne = () => {
  const { posts, loading, error } = MethodOneHooks();
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <Container count="1" search={search} setSearch={setSearch} posts={posts} filteredPosts={filteredPosts} method="Simple Search Method" />
  );
};

export default MethodOne;

