import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Footer from "./Component/Footer";
import HomeSection from "./Component/HomeSection";
import Contact from "./Pages/ContactPage/Contact";
import Blog from "./Pages/Blogpage/Blog";
import Aboutmain from "./Pages/Aboutpage/Aboutmain";
import Careermain from "./Pages/CareerPage/Careermain";
import Mnavbar from "./Component/M-navbar";
import Service from "./Pages/ServicePage/Service";
import PhpDepartment from "./Pages/PhpDepartmentPage/PhpDepartment";
import Festival_title from "./Pages/Blogs/Festival_title";
import Singlecontent from "./Pages/Blogs/Singlecontent";
import AllBlogs from "./Pages/Blogs/AllBlogs";
import ScrollToTop from "./ScrollToTop";
import NextPrevious from "./Pages/Blogs/NextPrevious";


function App() {
  const url_slug = "https://wp.phpcodedemo"
  let Api_url = "https://sohamsolution.com/wp-json/wp/v2/"

  return (
    <Router>
      <ScrollToTop />
      <Mnavbar />
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path={`/${process.env.SLUG_URL}/about/`} element={<Aboutmain />} />
        <Route path={`/${process.env.SLUG_URL}/contact-us/`} element={<Contact />} />
        <Route path={`/${process.env.SLUG_URL}/bloges`} element={<Blog />} />


        <Route path={`/${process.env.SLUG_URL}/blogs`} element={<AllBlogs url_slug={url_slug} />} />
        <Route path={`/${process.env.SLUG_URL}/:id`} element={<Singlecontent Api_url={Api_url} />} />
        <Route path={`/${process.env.SLUG_URL}/categories/:id`} element={<Festival_title url_slug={url_slug} />} />






        <Route path={`/${process.env.SLUG_URL}/career/`} element={<Careermain />} />
        <Route path={`/${process.env.SLUG_URL}/services/`} element={<Service />} />
        <Route path={`/${process.env.SLUG_URL}/Php_department`} element={<PhpDepartment />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
