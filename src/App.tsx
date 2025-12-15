import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout/Index";
import AdminLayout from "./layout/AdminLayout/index";
import ProtectRoute from "./components/common/ProtectRoute";

// Main Pages
import Home from "./pages/Main/Home";
import Blog from "./pages/Main/Blogs/Blog";
import Products from "./pages/Main/Produits/Products";
import Category from "./pages/Main/Shop/Category";
import About_us from "./pages/Main/About_us";
import WomensBeauty from "./pages/Main/Shop/categorie_description/WomensBeauty";
import ContactSection from "./pages/Main/Shop/ContactSection";

// Auth Pages
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ForgotPassword from "./pages/auth/forgotPassword";
import ResetPassword from "./pages/auth/resetPassword";
import ConfirmOtp from "./pages/auth/confirmOtp";

// Admin Pages
import Dashboard from "./pages/Admin/Dashboard";
import SignIn from "./pages/Admin/authentifications/SignIn";
import SignUp from "./pages/Admin/authentifications/SignUp";
import AdminForgotPassword from "./pages/Admin/authentifications/ForgotPassword";
import AdminResetPassword from "./pages/Admin/authentifications/ResetPassword";
import AllCategories from "./pages/Admin/catalog/categories/AllCategories";
import AddCategory from "./pages/Admin/catalog/categories/addCategory";
import UpdateCategory from "./pages/Admin/catalog/categories/updateCategory";
import AllProducts from "./pages/Admin/catalog/produits/AllProducts";
import ProductsList from "./pages/Admin/catalog/produits/ProductsList";
import AllUsers from "./pages/Admin/customers/AllUsers";
import OrdersDetails from "./pages/Admin/orders/OrdersDetails";
import AllComments from "./pages/Admin/inbox/AllComments";
import Statistiques from "./pages/Admin/analytics/Statistiques";
import Setting from "./pages/Admin/Setting";
import FAQ from "./pages/Admin/FAQ";
import HelpCenter from "./pages/Admin/HelpCenter";
import TermsAndConditions from "./pages/Admin/TermsAndConditions";

// Other
import NotFound from "./pages/NotFound";
import ShoppingCart from "./pages/Main/Shop/ShoppingCart";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes (No Layout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpwd" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/confirm-otp" element={<ConfirmOtp />} />

        {/* Main Layout Routes */}
        <Route path="" element={<MainLayout />}>
          <Route path="" element={<Navigate to={"/home"} />} />
          <Route path="home" index element={<Home />} />
          <Route path="blog" index element={<Blog />} />
          <Route path="produit" index element={<Products />} />
          <Route path="category" index element={<Category />} />
          <Route path="about" index element={<About_us />} />
          <Route path="productcard" index element={<ContactSection />} />
          <Route path="/shopcart" element={<ShoppingCart/>}></Route>
          <Route path="contact" element={<ContactSection/>}/>
          <Route path="shop" element={<Category/>}/>
          <Route path="women" element={<WomensBeauty/>}/>
        </Route>

        {/* Admin Layout Routes (Protected) */}
        <Route
          path="/admin"
          element={
            <ProtectRoute>
              <AdminLayout />
            </ProtectRoute>
          }
        >
          <Route path="" element={<Navigate to="/admin/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          
          {/* Admin Auth Routes */}
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<AdminForgotPassword />} />
          <Route path="reset-password" element={<AdminResetPassword />} />
          
          {/* Catalog Routes */}
          <Route path="categories" element={<AllCategories />} />
          <Route path="categories/add" element={<AddCategory />} />
          <Route path="categories/update/:id" element={<UpdateCategory />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="products/list" element={<ProductsList />} />
          
          {/* Other Admin Routes */}
          <Route path="customers" element={<AllUsers />} />
          <Route path="orders" element={<OrdersDetails />} />
          <Route path="comments" element={<AllComments />} />
          <Route path="analytics" element={<Statistiques />} />
          <Route path="settings" element={<Setting />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="help" element={<HelpCenter />} />
          <Route path="terms" element={<TermsAndConditions />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
