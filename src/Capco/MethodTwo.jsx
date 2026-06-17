import React, { useEffect, useMemo, useState } from "react";
import MethodTwoHooks from "./MethodTwoHooks";
import Container from "./Container";

function MethodTwo() {
  const { posts, filteredPosts, search, setSearch } = MethodTwoHooks();

  return (
    <Container count="2" search={search} setSearch={setSearch} posts={posts} filteredPosts={filteredPosts} method="UseMemo Method" />
  );
}

export default MethodTwo;