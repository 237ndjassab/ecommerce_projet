import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Advantages from "./advantages";

const MainLayout = () => {
  return (
    <section>
      <section>
        <div>
            <Header/>
        </div>
        <main>
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
