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
import CategoriesChildMan from "./Pages/Blogs/Categories-Child-Man";



function App() {
  const slug="https://sohamsolution.com"
  let Api_url = "https://sohamsolution.com/wp-json/wp/v2/"
  return (
    <>

      <Router>
        <Mnavbar slug={slug} />
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomeSection  />} />
          <Route path="/about" element={<Aboutmain />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />

          <Route path="/Blog" element={<Blogsmain slug={slug} />} />
          <Route path="/categories/:CategoriesId" element={<CategoriesChildMan slug={slug} />} 
           />
          <Route path="https://sohamsolution.com/:SingleBlogcontentsId" element={<SingleBlogcontents Api_url={Api_url}  />} />
          <Route path="https://sohamsolution.com/:CategoriessingleId" element={<Categoriessingle Api_url={`${Api_url}posts/`}/>} />
          <Route path="/career" element={<Careermain />} />
  
          <Route path="/Service" element={<Service />} />
          <Route path="/phpdepartment" element={<PhpDepartment />} />
       

        </Routes>
        < Footer />
      </Router>
    </>
  );
}

export default App;

