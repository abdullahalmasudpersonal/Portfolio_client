import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import { Route, Routes, useLocation } from "react-router-dom";
import CreateProject from "./Pages/Amin/CreateProject/CreateProject";
import AdminLayout from "./Pages/Amin/Admin/AdminLayout";
import Admin from "./Pages/Amin/Admin/Admin";
import Home from "./Pages/Home/Home";
import AllBlogs from "./Pages/AllBlogs/AllBlogs";
import AllProjects from "./Pages/AllProjects/AllProjects";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Amin/Login/Login";

function App() {
  const location = useLocation();
  const hideNavAndFooterPaths = [
    "/login",
    "/admin-dashboard",
    "/admin-dashboard/create-project",
  ];

  const shouldHideNavAndFooter = hideNavAndFooterPaths.includes(
    location.pathname
  );
  return (
    <>
      {!shouldHideNavAndFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allblogs" element={<AllBlogs />} />
        <Route path="/allprojects" element={<AllProjects />} />
        <Route path="/admin-dashboard" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="create-project" element={<CreateProject />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
      {!shouldHideNavAndFooter && <Footer />}
    </>
  );
}

export default App;
