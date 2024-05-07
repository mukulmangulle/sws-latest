import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import Footer from "./Component/Footer";
import HomeSection from "./Component/HomeSection";
import Contact from "./Pages/ContactPage/Contact";
import Blog from "./Pages/Blogpage/Blog";
import CategoriesPhpBlog from "./Pages/CategoriesPhpBlogPage/CategoriesPhpBlog";
import SingleBlogs from "./Pages/SingleBlogPage/SingleBlogs";
import Aboutmain from "./Pages/Aboutpage/Aboutmain";
import Careermain from "./Pages/CareerPage/Careermain";
import Mnavbar from "./Component/M-navbar";
import PhpDevelopment from "./Pages/Phpdevelopment/PhpDevelopment";
import Service from "./Pages/ServicePage/Service";
import PhpDepartment from "./Pages/PhpDepartmentPage/PhpDepartment";



function App() {
  return (
    <>
      <Router>
        <Mnavbar/>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<Aboutmain />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/categories" element={<CategoriesPhpBlog />} />
          <Route path="/singleblog" element={<SingleBlogs />} />
          <Route path="/careermain" element={<Careermain/>} />
          <Route path="/PhpDevelopment" element={<PhpDevelopment/>} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/phpdepartment" element={<PhpDepartment/>} />


        </Routes>
        < Footer />
      </Router>
    </>
  );
}

export default App;

