import "./Admin.css";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
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
            </div>
            <Outlet />
          </div>
        </div>
      </>
    </>
  );
};

export default AdminLayout;
