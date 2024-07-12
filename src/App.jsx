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
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import { ToastContainer } from "react-toastify";
/* Tostify */
import "react-toastify/dist/ReactToastify.css";
import CreateBlog from "./Pages/Amin/CreateBlog/CreateBlog";
import CreateSkills from "./Pages/Amin/CreateSkills/CreateSkills";
import ProtectedRoute from "./Pages/Shared/ProtectedRoute";
/* slick-carousel */
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  const location = useLocation();
  const hideNavAndFooterPaths = [
    "/login",
    "/admin-dashboard",
    "/admin-dashboard/create-project",
    "/admin-dashboard/create-blog",
    "/admin-dashboard/create-skill",
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
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Admin />} />
          <Route path="create-project" element={<CreateProject />} />
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="create-skill" element={<CreateSkills />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
      {!shouldHideNavAndFooter && <Footer />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
