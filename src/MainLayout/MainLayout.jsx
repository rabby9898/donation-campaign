import { Outlet } from "react-router-dom";
import Nav from "../components/Header/Nav";

const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
