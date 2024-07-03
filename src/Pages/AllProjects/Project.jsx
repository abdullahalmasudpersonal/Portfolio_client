/* eslint-disable react/prop-types */
import { faCircleInfo, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import "./Project.css";
import Aos from "aos";

// eslint-disable-next-line react/prop-types
const Project = ({ project }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const {
    _id,
    porject_img1,
    porject_img2,
    porject_img3,
    porject_name,
    porject_title,
    porject_detail_1,
    porject_detail_2,
    porject_detail_3,
    porject_detail_4,
    porject_live_link,
    porject_client_side,
    porject_server_side,
  } = project;

  return (
    <div data-aos="zoom-in-right" className="col">
      <div className="project-dev-shadow">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 rounded-top"
                src={porject_img1}
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 rounded-top"
                src={porject_img2}
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 rounded-top"
                src={porject_img3}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" projects-projects-dev">
          <h5 className="mt-3"> <a href={porject_live_link} rel="noreferrer" target="_blank" style={{textDecoration:'none',color:'white'}}>{porject_name} <FontAwesomeIcon icon={faEye} style={{fontSize:'15px'}} /> </a></h5>
          <p className=" ">{porject_title}</p>
          <div className="">
            <small>
              <ul>
                <li>{porject_detail_1}</li>
                <li>{porject_detail_2}</li>
                <li>{porject_detail_3}</li>
                <li>{porject_detail_4}</li>
              </ul>
            </small>
          </div>
        </div>

        <div className="p-2 projects-projects-dev ">
          <small className="d-flex justify-content-end live_client_server_btn">
            <a href={`/projects/${_id}`} rel="noreferrer" target="_blank">
              {" "}
              <button className="project-live-btn">
                <FontAwesomeIcon icon={faCircleInfo} /> Details
              </button>
            </a>
            <a href={porject_client_side} target="_blank" rel="noreferrer">
              <button className="project-live-btn">
                {" "}
                <i className="fab fa-github"></i> Client
              </button>
            </a>
            <a href={porject_server_side} target="_blank" rel="noreferrer">
              <button className="project-live-btn">
                {" "}
                <i className="fab fa-github"></i> Server
              </button>
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Project;
