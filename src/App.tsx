import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import MainLayout from './layout/MainLayout/Index'
import Home from './pages/Main/Home'
import Blog from './pages/Main/Blogs/Blog'
import Products from './pages/Main/Produits/Products'
import Category from './pages/Main/Shop/Category'
import About_us from './pages/Main/About_us'
import Contact from './pages/Main/Contact'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Admin/Dashboard'
import AdminLayout from './layout/AdminLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path='' element={<Navigate to={'/home'} />} />
          <Route path='home' index element={<Home/>} />
          <Route path='blog' index element={<Blog/>} />
          <Route path='product' index element={<Products/>} />
          <Route path='categorie' index element={<Category/>} />
          <Route path='about' index element={<About_us/>} />
          <Route path='contact' index element={<Contact/>} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route path='admin' index element={<Navigate to={'/admin/dashboard'} />} />
          <Route path='/admin/dashboard' index element={<Dashboard/>} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App