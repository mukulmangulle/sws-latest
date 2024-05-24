import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import Footer from "./Component/Footer";
import HomeSection from "./Component/HomeSection";
import Contact from "./Pages/ContactPage/Contact";
import Blog from "./Pages/Blogpage/Blog";
import CategoriesPhpBlog from "./Pages/CategoriesPhpBlogPage/CategoriesPhpBlog";
import Aboutmain from "./Pages/Aboutpage/Aboutmain";
import Careermain from "./Pages/CareerPage/Careermain";
import Mnavbar from "./Component/M-navbar";
import PhpDevelopment from "./Pages/Phpdevelopment/PhpDevelopment";
import Service from "./Pages/ServicePage/Service";
import PhpDepartment from "./Pages/PhpDepartmentPage/PhpDepartment";
import Blogsmain from "./Pages/Blogs/Blogsmain";
import SingleBlogcontents from "./Pages/Blogs/SingleBlogcontents";
import Categoriessingle from "./Pages/CategoriesPhpBlogPage/Categoriessingle";



function App() {

  const Api_url = "https://sohamsolution.com/wp-json/wp/v2/"
  return (
    <>

      <Router>
        <Mnavbar />
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<Aboutmain />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/categories/:CategoriesId" element={<CategoriesPhpBlog />} 
           />
          <Route path="/singleblog/:SingleBlogcontentsId" element={<SingleBlogcontents  />} />
          <Route path="/Categoriessingle/:CategoriessingleId" element={<Categoriessingle Api_url={`${Api_url}posts/`}/>} />
          <Route path="/careermain" element={<Careermain />} />
          <Route path="/PhpDevelopment" element={<PhpDevelopment />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/phpdepartment" element={<PhpDepartment />} />
          <Route path="/Blog" element={<Blogsmain />} />

        </Routes>
        < Footer />
      </Router>
    </>
  );
}

export default App;

