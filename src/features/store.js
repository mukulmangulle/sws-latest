import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./content/contentSlice"
import blogRducer from "./blog/blogsSlice"

const store = configureStore({
  reducer: {
    content: contentReducer,
    blogs: blogRducer,
  },
});

export default store;
