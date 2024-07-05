import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const proseed = window.confirm(`Are you sure Create New Blog ?`);
    if (proseed) {
      const newBlog = {
        name: data.name,
        image: data.image,
        description: data.description,
      };
      fetch("http://localhost:5000/api/blogs/create-blog", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBlog),
      })
        .then((res) => res.json())
        .then((inserted) => {
          if (inserted?.data?._id) {
            toast.success("Added New Blog");
            reset();
          } else {
            toast.error("Faield to Added New Blog");
          }
        });
    }
  };

  return (
    <div className="createProject">
      <div className="createProjectDev">
        <h3 className="text-center mt-3">Create Blog</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="createProjectForm">
          <input
            name="pName"
            placeholder="Blog Name"
            {...register("name", { required: true })}
            required
          />
          <input
            name="pTitle"
            placeholder="Project Title"
            {...register("image", { required: true })}
            required
          />
          <input
            name="pLiveLink"
            placeholder="Project Live Link"
            required
            {...register("description", { required: true })}
          />
          <input name="" type="submit" required />
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
