import { useDispatch } from "react-redux";
import "./Admin.css";
import { Link, Outlet } from "react-router-dom";
import { logout } from "../../../redux/features/auth/authSlice";

const AdminLayout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <>
        <div className="dashboardTopBar">
          <h4
            style={{ color: "white", textAlign: "center", paddingTop: "12px" }}
          >
            Admin Dashboard
          </h4>
        </div>
        <div className="px-0">
          <div className="dashboard">
            <div className="dashboard-dev1">
              <Link to="/admin-dashboard">
                <button>Dashboard</button>
              </Link>
              <Link to="/admin-dashboard/create-project">
                <button>Create Project</button>
              </Link>
              <Link to="/admin-dashboard/create-blog">
                <button>Create Blog</button>
              </Link>
              <Link to="/admin-dashboard/create-skill">
                <button>Create Skill</button>
              </Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
            <Outlet />
          </div>
        </div>
      </>
    </>
  );
};

export default AdminLayout;
