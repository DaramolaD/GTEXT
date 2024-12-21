import { Outlet } from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
