import React, { useEffect, useState } from "react";
import MethodThreeHooks from "./MethodThreeHooks";
import Container from "./Container";

function MethodThree() {
    const { search, setSearch, posts } = MethodThreeHooks();

    return (
        <Container count="3" search={search} setSearch={setSearch} posts={posts} filteredPosts={posts} method="Debounce Method" />
    );
}

export default MethodThree;