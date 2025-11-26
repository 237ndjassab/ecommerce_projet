import { BrowserRouter, Route, Routes } from "react-router";
import Signin from "./pages/signin";
import Login from "./pages/login";
import NotFound from "./pages/notfound";
import Home from "./pages/main/home";
import MainLayout from "./layouts/mainlayout";
import ForgotPassword from "./pages/forgotPassword";
import ConfirmOTP from "./pages/confirmOtp";
import ResetPassword from "./pages/resetPassword";

const App =()=> {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/forgotpwd" element={<ForgotPassword/>}/>
          <Route path="/confirmotp" element={<ConfirmOTP/>}/>
          <Route path="/resetpwd" element={<ResetPassword/>}/>
          <Route path="/main" element={<MainLayout />}>
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
