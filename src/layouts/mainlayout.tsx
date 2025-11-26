import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";
import Advantages from "./advantages";

const MainLayout = () => {
  return (
    <section className="">
      <section>
        <div className="h-20 w-full">
            <Header/>
        </div>
        <main className="bg-white rounded-xl w-full h-[calc(100dvh-80px)] overflow-y-scroll">
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
