import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blog from "../AllBlogs/Blog";
import "./Blogs.css";
import Aos from "aos";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-server-two-beta.vercel.app/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="blogs" className="blogs-bg">
      <div className="pt-3">
        <h3
          data-aos="fade-down"
          className="text-center pt-5 mt-5 mb-5 numbers-numbers-headline"
        >
          BLOGS
        </h3>
        <div className="container mt-5 pt-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {blogs?.data?.slice(0, 3).map((blog) => (
              <Blog key={blog._id} blog={blog} />
            ))}
          </div>
          <div data-aos="fade-up-right" className="blogs-see-all-btn">
            <Link to="/allblogs">
              <button>See All Blogs</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
