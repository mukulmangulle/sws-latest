import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./content/contentSlice";
import blogcontentsreducer from "./blog/blogsSlice";
// import SingleBlogReducer from "./SingleBlog/SingleBlogSlice";

const store = configureStore({
  reducer: {
    content: contentReducer,
    blogs: blogcontentsreducer,
    // singleblog: SingleBlogReducer,
  },
});

export default store;
