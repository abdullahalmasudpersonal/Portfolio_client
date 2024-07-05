import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateSkills = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const proseed = window.confirm(`Are you sure Create New Skill ?`);
    if (proseed) {
      const newBlog = {
        title: data.title,
      };
      fetch("http://localhost:5000/api/skills/create-skill", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBlog),
      })
        .then((res) => res.json())
        .then((inserted) => {
          if (inserted?.data?._id) {
            toast.success("Added New Skill");
            reset();
          } else {
            toast.error("Faield to Added New Skill");
          }
        });
    }
  };

  return (
    <div className="createProject">
      <div className="createProjectDev">
        <h3 className="text-center mt-3">Create Skill</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="createProjectForm">
          <input
            name="pName"
            placeholder="Blog Name"
            {...register("title", { required: true })}
            required
          />
          <input name="" type="submit" required />
        </form>
      </div>
    </div>
  );
};

export default CreateSkills;
