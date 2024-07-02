import "./CreateProject.css";

const CreateProject = () => {
  // const handlePlaceProject = event => {
  //     event.preventDefault();
  //     const postProject = {

  //     }
  // }

  // const proseed = window.confirm(`Are you sure ?`);
  // if(proseed){

  // }

  return (
    <div className="createProject" style={{ paddingBottom: "150px" }}>
      <div className="createProjectDev">
        <h3 className="text-center mt-3">Create Project</h3>
        <form className="createProjectForm">
          <input name="pName" placeholder="Project Name" required />
          <input name="pTitle" placeholder="Project Title" required />
          <input name="pLiveLink" placeholder="Project Live Link" required />
          <input
            name="pClientLink"
            placeholder="Project Client Link"
            required
          />
          <input
            name="pServerLink"
            placeholder="Project Server Link"
            required
          />
          <input name="pDisOne" placeholder="Project Dis One" required />
          <input name="pDisTwo" placeholder="Project Dis Two" required />
          <input name="pDisThree" placeholder="Project Dis Three" required />
          <input name="pDisFour" placeholder="Project Dis Four" required />
          <input
            name="pDisFour"
            placeholder="Project Dis Four"
            type="submit"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
