import React, { useEffect, useState } from "react";
import MethodThreeHooks from "./MethodThreeHooks";

function MethodThree() {
  const { search, setSearch, posts } = MethodThreeHooks();

  return (
    <div>
      <h2>Posts Method 3</h2>

      <input
        type="text"
        placeholder="Search title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MethodThree;