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
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import ForgotPassword from "./pages/auth/forgotPassword";
import ConfirmOTP from "./pages/auth/confirmOtp";
import ResetPassword from "./pages/auth/resetPassword";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainLayout />}>
            <Route path="" element={<Navigate to={"/home"} />} />
            <Route path="home" index element={<Home />} />
            <Route path="blog" index element={<Blog />} />
            <Route path="product" index element={<Products />} />
            <Route path="categorie" index element={<Category />} />
            <Route path="about" index element={<About_us />} />
            <Route path="contact" index element={<Contact />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin" element={<Navigate to={"/admin/dashboard"} />} />
            <Route path="/admin/dashboard" index element={<Dashboard />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpwd" element={<ForgotPassword />} />
          <Route path="/confirmotp" element={<ConfirmOTP />} />
          <Route path="/resetpwd" element={<ResetPassword />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
