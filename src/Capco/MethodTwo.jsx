import React, { useEffect, useMemo, useState } from "react";
import MethodTwoHooks from "./MethodTwoHooks";

function MethodTwo() {
  const { posts, filteredPosts, search, setSearch } = MethodTwoHooks();

  return (
    <div>
      <h2>Posts Method 2</h2>

      <input
        type="text"
        placeholder="Search title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MethodTwo;