import { useState } from "react";
import { useEffect } from "react";

const UseProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return [projects, setProjects];
};

export default UseProjects;
