import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "./Header.css";

function Layout() {
  return (
    <div className="Header">
      <Header />
      <Outlet /> {/* Child routes will render here */}
      <Footer />
    </div>
  );
}

export default Layout;
