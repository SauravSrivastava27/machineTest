import React, { useEffect, useState } from "react";

const MethodThreeHooks = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.json();

      const filteredData = data.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );

      setPosts(filteredData);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return { search, setSearch, posts };
};

export default MethodThreeHooks;