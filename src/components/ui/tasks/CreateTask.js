'use client'
import { useCreateTaskMutation } from "@/redux/api/apiSlice";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CreateTask = () => {
  const { register, handleSubmit,reset } = useForm();
  const [createTask] = useCreateTaskMutation();

  const onSubmit = async (data) => {
    
    try {
        const formData = {
            title: data?.title,
            description: data?.description,
            priority: data?.priority,
          };
    //  console.log(formData);
      const res =await createTask(formData)
      if(res){

          toast.success("task added successfully");
          reset()
      }
      
    } catch (err) {
      
      console.error(err.message)
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} placeholder="Type Task Name" className="border" name="title" required/>
        <input {...register("description")}  placeholder="Type Task desc" className="border" name="description" required/>
        <select {...register("priority")} className="border" name="priority" required >
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>

        <input type="submit" value="Add Task"  className="border"/>
      </form>
    </div>
  );
};

export default CreateTask;
