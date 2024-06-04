import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./content/contentSlice";
import blogcontentsreducer from "./blog/blogsSlice";
import categoriesreducer from "./Categories/categoriesSlice"

const store = configureStore({
  reducer: {
    content: contentReducer,
    blogs: blogcontentsreducer,
    categorie:categoriesreducer,

  },
});

export default store;
