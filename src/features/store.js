import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./content/contentSlice";
import blogcontentsreducer from "./blog/blogsSlice";
import categoriesreducer from "./Categories/categoriesSlice"
// import Categoriesblogreducer from "./Categoriesblog/CategoriesblogSlice"

const store = configureStore({
  reducer: {
    content: contentReducer,
    blogs: blogcontentsreducer,
    categorie:categoriesreducer,
    // Categoriesblog: Categoriesblogreducer,
  },
});

export default store;
