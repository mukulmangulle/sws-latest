import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./content/contentSlice"
import blogcontentsreducer from "./blog/blogsSlice"

const store = configureStore({
  reducer: {
    content: contentReducer,
    blogs: blogcontentsreducer,
  },
});

export default store;
