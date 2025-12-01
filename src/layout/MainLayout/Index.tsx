import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Advantages from "./advantages";

const MainLayout = () => {
  return (
    <section className="">
      <section>
        <div className="h-20 w-full">
            <Header/>
        </div>
        <main className="bg-white rounded-xl w-full min-h-[calc(100vh-80px)]">
            <Outlet/>
        </main>
        <div>
            <Advantages/>
            <Footer />
        </div>
      </section>
    </section>
  );
};

export default MainLayout;  
