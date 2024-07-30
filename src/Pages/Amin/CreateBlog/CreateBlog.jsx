import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import { useState } from "react";

const CreateBlog = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleChange = (content) => {
    setEditorContent(content);
  };
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const proseed = window.confirm(`Are you sure Create New Blog ?`);
    if (proseed) {
      const newBlog = {
        name: data.name,
        image: data.image,
        description: editorContent,
      };
      fetch(
        "https://portfolio-server-two-beta.vercel.app/api/blogs/create-blog",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newBlog),
        }
      )
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
    <div>
      <h1>React Quill Editor with Vite</h1>

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <TextEditor register={register} />
      </form> */}
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
              name="blogImage"
              placeholder="Blog Image"
              {...register("image", { required: true })}
              required
            />
            {/*  <input
              name="description"
              placeholder="Project Details"
              required
              {...register("description", { required: true })}
            /> */}
            <ReactQuill
              value={editorContent}
              onChange={handleChange}
              theme="snow"
            />
            <input name="" type="submit" required />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
