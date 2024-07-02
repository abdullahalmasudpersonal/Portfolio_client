import { useEffect } from "react";
import "./Skills.css";
import skill1 from "../../Assets/img/skills/html.png";
import skill2 from "../../Assets/img/skills/css.png";
import skill3 from "../../Assets/img/skills/javascript.png";
import skill4 from "../../Assets/img/skills/bootstrap.png";
import skill5 from "../../Assets/img/skills/tailwindcss.png";
import skill6 from "../../Assets/img/skills/react.png";
import skill7 from "../../Assets/img/skills/sass (1).png";
import skill8 from "../../Assets/img/skills/mui.png";
import skill9 from "../../Assets/img/skills/firebase.png";
import skill10 from "../../Assets/img/skills/nodejs.png";
import skill11 from "../../Assets/img/skills/mongodb.png";
import skill12 from "../../Assets/img/skills/heroku.png";
import skill13 from "../../Assets/img/skills/git.png";
import typescript from "../../Assets/img/skills/typescript.png";
import postgres from "../../Assets/img/skills/postgres.png";
import prisma from "../../Assets/img/skills/pirsma.png";
import skill15 from "../../Assets/img/skills/axions.png";
import antDesing from "../../Assets/img/skills/ant-desing.png";
import skill17 from "../../Assets/img/skills/jwt.png";
import skill18 from "../../Assets/img/skills/mongoose.png";
import skill19 from "../../Assets/img/skills/nextjs.png";
import redux from "../../Assets/img/skills/redux.png";
import vite from "../../Assets/img/skills/vite.png";
import Aos from "aos";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="skills" className="counter-bg">
      <div className="container pt-3">
        <h3
          data-aos="flip-up"
          className="text-center pt-5 mb-5 numbers-numbers-headline"
        >
          CORE SKILLS
        </h3>

        <div className="skills-icon pt-5">
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="HTML"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "145px", height: "125px" }}
              className=""
              src={skill1}
              alt="Card image cap"
            />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="CSS"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "100px", height: "100px" }}
              className="img-fluid"
              src={skill2}
              alt="Card image cap"
            />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="JAVASCRIPT"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "100px", height: "100px" }}
              className=""
              src={skill3}
              alt="Card image cap"
            />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="TYPESCRIPT"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "100px", height: "100px" }}
              className=""
              src={typescript}
              alt="Card image cap"
            />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="ANT-DESIGN"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img className="img-fluid" src={antDesing} alt="Card image cap" />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="BOOTSTRAP"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img className="img-fluid" src={skill4} alt="Card image cap" />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="TAILWIND"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img className="img-fluid" src={skill5} alt="Card image cap" />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="REACT"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "100px", height: "100px" }}
              className="img-fluid"
              src={skill6}
              alt="Card image cap"
            />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="VITE"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "100px", height: "100px" }}
              className="img-fluid"
              src={vite}
              alt="Card image cap"
            />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="SASS"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "100px", height: "100px" }}
              className="img-fluid"
              src={skill7}
              alt="Card image cap"
            />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="REDUX"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "100px", height: "100px" }}
              className="img-fluid"
              src={redux}
              alt="Card image cap"
            />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="MONGOOSE"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "100px", height: "100px" }}
              className="img-fluid"
              src={skill18}
              alt="Card image cap"
            />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="NEXT JS"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "100px", height: "100px" }}
              className="img-fluid"
              src={skill19}
              alt="Card image cap"
            />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="MATERIAL UI"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img className="img-fluid" src={skill8} alt="Card image cap" />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="FIREBASE"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img className="img-fluid" src={skill9} alt="Card image cap" />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="NODE JS"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "110px", height: "100px" }}
              className="img-fluid"
              src={skill10}
              alt="Card image cap"
            />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="EXPRESS JS"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            {/* <img style={{ width:'110px', height:'110px'}} className="img-fluid" src={skill18} alt="Card image cap" /> */}
            <h4 style={{ color: "rgb(247, 241, 214)" }}>
              Express{" "}
              <span
                style={{
                  padding: "12px 4px 0px 8px",
                  backgroundColor: "rgb(255, 208, 0)",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "29px",
                }}
              >
                JS
              </span>
            </h4>
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="MONGODB"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "250px", height: "150px" }}
              className="img-fluid"
              src={skill11}
              alt="Card image cap"
            />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="POSTGRE-SQL"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "250px", height: "150px" }}
              className="img-fluid"
              src={postgres}
              alt="Card image cap"
            />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="PRISMA"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "250px", height: "150px" }}
              className="img-fluid"
              src={prisma}
              alt="Card image cap"
            />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="HEROKU"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "130px", height: "80px" }}
              className="img-fluid"
              src={skill12}
              alt="Card image cap"
            />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="GIT"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "100px", height: "100px" }}
              className="img-fluid"
              src={skill13}
              alt="Card image cap"
            />
          </div>

          <div
            data-toggle="tooltip"
            data-placement="right"
            title="AXIOS"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "130px", height: "70px" }}
              className="img-fluid"
              src={skill15}
              alt="Card image cap"
            />
          </div>
          <div
            data-toggle="tooltip"
            data-placement="right"
            title="JSONWEBTOKEN"
            data-aos="fade-right"
            className="skills-skills-img"
          >
            <img
              style={{ width: "120px", height: "50px" }}
              className="img-fluid"
              src={skill17}
              alt="Card image cap"
            />
          </div>
        </div>

        {/* 
                <section className="progress-section">
                    <div className="container">
                        <div className="row ">

                            <div className="col-lg-3 mt-5">
                                <div className="progress-bars">
                                    <h2 className='text-dark'>90%</h2>
                                </div>
                                <h4 className='mt-5'>HTML</h4>
                            </div>

                            <div className="col-lg-3 mt-5">
                                <div className="progress-bars-four">
                                    <h2 className='text-dark'>90%</h2>
                                </div>
                                <h4 className='mt-5'>CSS</h4>
                            </div>

                            <div className="col-lg-3 mt-5">
                                <div className="progress-bars-six">
                                    <h2 className='text-dark'>65%</h2>
                                </div>
                                <h4 className='mt-5'>JAVASCRIPT</h4>
                            </div>


                            <div className="col-lg-3 mt-5">
                                <div className="progress-bars-seven">
                                    <h2 className='text-dark'>70%</h2>
                                </div>
                                <h4 className='mt-5'>REACT</h4>
                            </div>

                        </div>
                    </div>
                </section> */}
      </div>
    </div>
  );
};

export default Skills;
