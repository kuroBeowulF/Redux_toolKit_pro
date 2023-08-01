import React from "react";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const state = useSelector((state) => state.posts);
  console.log({ state });
  return <div>CreatePost</div>;
};

export default CreatePost;
