export const InputField = ({ search, setSearch, placeholder }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
}

export const PostList = ({ posts, filteredPosts }) => {
    return (
        <ul>
            {filteredPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
}
