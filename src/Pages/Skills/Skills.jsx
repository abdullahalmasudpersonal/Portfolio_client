import { useEffect, useState } from "react";
import "./Skills.css";
import Aos from "aos";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  });

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
          {skills?.data?.map((item) => (
            <div
              key={item?._id}
              data-toggle="tooltip"
              data-placement="right"
              title={item?.title?.toUpperCase()}
              data-aos="fade-right"
              className="skills-skills-img"
            >
              <img
                /*  style={{ width: "145px", height: "125px" }} */
                className=""
                src={item?.image}
                alt="Card image cap"
              />
            </div>
          ))}

          {/* <div
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
