import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import Footer from "./Component/Footer";
import HomeSection from "./Component/HomeSection";
import Contact from "./Pages/ContactPage/Contact";
import Blog from "./Pages/Blogpage/Blog";
import Aboutmain from "./Pages/Aboutpage/Aboutmain";
import Careermain from "./Pages/CareerPage/Careermain";
import Mnavbar from "./Component/M-navbar";
import Service from "./Pages/ServicePage/Service";
import PhpDepartment from "./Pages/PhpDepartmentPage/PhpDepartment";
import Blogsmain from "./Pages/Blogs/Blogsmain";
import SingleBlogcontents from "./Pages/Blogs/SingleBlog";
import Categoriessingle from "./Pages/Blogs/Categoriessingle";
import CategoriesChildMan from "./Pages/Blogs/Festival_title";
import Categories from "./Pages/Blogs/Categories_name";
import Festival_title from "./Pages/Blogs/Festival_title";



function App() {
  const url_slug = "https ://wp.phpcodedemo"
  // const url_slug="https://sohamsolution.com"
  let Api_url = "https://sohamsolution.com/wp-json/wp/v2/"

  return (
    <>

      <Router>
        <Mnavbar />
        <Header />
        <Navbar />

        <Routes>
          <Route path={`/`} element={<HomeSection />} />
          <Route path={`/${process.env.SLUG_URL}/about/`} element={<Aboutmain />} />
          <Route path={`/${process.env.SLUG_URL}/contact-us/`} element={<Contact />} />
          <Route path={`/${process.env.SLUG_URL}/bloges`} element={<Blog />} />
          <Route path={`/${process.env.SLUG_URL}/blogs`} element={<Blogsmain url_slug={url_slug} />} />
          <Route path={`/${process.env.SLUG_URL}/categorie/:SingleBlogcontentsId`} element={<SingleBlogcontents Api_url={Api_url} />} />
          <Route path={`/${process.env.SLUG_URL}/:CategoriesId`} element={<Festival_title url_slug={url_slug} />} />
          <Route path={`/${process.env.SLUG_URL}/categories/:CategoriessingleId`} element={<Categoriessingle Api_url={`${Api_url}posts/`} />} />
          <Route path={`/${process.env.SLUG_URL}/career/`} element={<Careermain />} />
          <Route path={`/${process.env.SLUG_URL}/services/`} element={<Service />} />
          <Route path={`/${process.env.SLUG_URL}/Php_department`} element={<PhpDepartment />} />

        </Routes>
        < Footer />
      </Router>
    </>
  );
}

export default App;

