import { useEffect, useState, useMemo } from "react";

const MethodTwoHooks = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

   useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [posts, search]);

  return { posts, filteredPosts, search, setSearch };
};

export default MethodTwoHooks;