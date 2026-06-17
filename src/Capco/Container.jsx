import { InputField, PostList } from "./utils";

const Container = ({ search, setSearch, posts, filteredPosts, method, count }) => {
    return (
        <div className="col-4 p-3">
            <h4>{method}</h4>
            <InputField search={search} setSearch={setSearch} placeholder={`Search for Box ${count}...`} />
            <PostList posts={posts} filteredPosts={filteredPosts} />
        </div>
    );
};

export default Container;