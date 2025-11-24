import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout/Index";
import Home from "./pages/Main/Home";
import Blog from "./pages/Main/Blogs/Blog";
import Products from "./pages/Main/Produits/Products";
import Category from "./pages/Main/Shop/Category";
import About_us from "./pages/Main/About_us";
import Contact from "./pages/Main/Contact";
import NotFound from "./pages/NotFound";
import ContactSection from "./pages/Main/Shop/ContactSection.tsx"
import WomensBeauty from './pages/Main/Shop/categorie_description/WomensBeauty.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="" element={<Navigate to={"/home"} />} />
          <Route path="home" index element={<Home />} />
          <Route path="blog" index element={<Blog />} />
          <Route path="produit" index element={<Products />} />
          <Route path="/category" index element={<Category />} />
          <Route path="about" index element={<About_us />} />
          <Route path="contact" index element={<Contact />} />
          <Route path="/productcard" index element={<ContactSection/>} />
          <Route path="/womenBeauty" index element={<WomensBeauty/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
