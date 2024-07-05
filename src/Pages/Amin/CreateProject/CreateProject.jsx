import { useForm } from "react-hook-form";
import "./CreateProject.css";
import { toast } from "react-toastify";

const CreateProject = () => {
  // const handlePlaceProject = event => {
  //     event.preventDefault();
  //     const postProject = {

  //     }
  // }

  // const proseed = window.confirm(`Are you sure ?`);
  // if(proseed){

  // }

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const proseed = window.confirm(`Are you sure Create New Project ?`);
    if (proseed) {
      const newProject = {
        porject_name: data.porject_name,
        porject_title: data.porject_title,
        porject_live_link: data.porject_live_link,
        porject_client_side: data.porject_client_side,
        porject_server_side: data.porject_server_side,
        porject_detail_1: data.porject_detail_1,
        porject_detail_2: data.porject_detail_2,
        porject_detail_3: data.porject_detail_3,
        porject_detail_4: data.porject_detail_4,
        porject_img1: data.porject_img1,
        porject_img2: data.porject_img2,
        porject_img3: data.porject_img3,
      };
      fetch(
        "https://portfolio-server-two-beta.vercel.app/api/projects/create-project",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newProject),
        }
      )
        .then((res) => res.json())
        .then((inserted) => {
          if (inserted?.data?._id) {
            toast.success("Added New Project");
            reset();
          } else {
            toast.error("Faield to Added New Project");
          }
        });
    }
  };

  return (
    <div className="createProject">
      <div className="createProjectDev">
        <h3 className="text-center mt-3">Create Project</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="createProjectForm">
          <input
            name="pName"
            placeholder="Project Name"
            {...register("porject_name", { required: true })}
            required
          />
          <input
            name="pTitle"
            placeholder="Project Title"
            {...register("porject_title", { required: true })}
            required
          />
          <input
            name="pLiveLink"
            placeholder="Project Live Link"
            required
            {...register("porject_live_link", { required: true })}
          />
          <input
            name="pClientLink"
            placeholder="Project Client Link"
            required
            {...register("porject_client_side", { required: true })}
          />
          <input
            name="pServerLink"
            placeholder="Project Server Link"
            required
            {...register("porject_server_side", { required: true })}
          />
          <input
            name="pDisOne"
            placeholder="Project Dis One"
            required
            {...register("porject_detail_1", { required: true })}
          />
          <input
            name="pDisTwo"
            placeholder="Project Dis Two"
            required
            {...register("porject_detail_2", { required: true })}
          />
          <input
            name="pDisThree"
            placeholder="Project Dis Three"
            required
            {...register("porject_detail_3", { required: true })}
          />
          <input
            name="pDisFour"
            placeholder="Project Dis Four"
            required
            {...register("porject_detail_4", { required: true })}
          />
          <input
            name="pDisFour"
            placeholder="Project Img 1"
            required
            {...register("porject_img1", { required: true })}
          />
          <input
            name="pDisFour"
            placeholder="Project Img 2"
            required
            {...register("porject_img2", { required: true })}
          />
          <input
            name="pDisFour"
            placeholder="Project Img 3"
            required
            {...register("porject_img3", { required: true })}
          />
          <input name="" type="submit" required />
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
