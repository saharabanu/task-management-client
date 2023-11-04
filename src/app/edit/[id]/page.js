"use client";
import { useGetSingleTaskQuery, useUpdateTaskMutation } from "@/redux/api/apiSlice";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";

const EditPage = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const { register, handleSubmit, reset, control } = useForm();
  const { data } = useGetSingleTaskQuery(id);
  const [updateTask] = useUpdateTaskMutation();

  //  console.log(data?.data, data?.data?.title, 'from single api')

  const onSubmit = async (values) => {
    try {
      console.log(values);
      const res = await updateTask({ id, body: values });
      if (res) {
        toast.success("task updated successfully");
        // router.push("/")
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const defaultValues = {
    title: data?.data?.title,
    description: data?.data?.description,
    priority: data?.data?.priority,
    status: data?.data?.status,
  };
  return (
    <div className="pt-36">
      <div className="container max-w-3xl mx-auto ">
        <h1>---- {data?.data?.title},------ taken from single data</h1>
        <h2> Update Task</h2>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <Controller
          name="title"
          control={control}
          defaultValue={data?.data?.title} // Set the default value here
          render={({ field }) => <input {...field} />}
        /> */}
          <input
            {...register("title")}
            className="border"
            defaultValue={data?.data?.title}
            name="title"
          />
          <br /> <br />
          {data?.data?.description && (
            <input
              {...register("description")}
              placeholder="Type Task desc"
              className="border"
              name="description"
              defaultValue={data?.data?.description}
            />
          )}
          <br /> <br />
          <select {...register("priority")} className="border" defaultValue={data?.data?.priority}>
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
          </select>
          <select {...register("status")} className="border" defaultValue={data?.data?.status}>
            <option value="high">complete</option>
            <option value="medium">inComplete</option>
          </select>
          <br /> <br />
          <input type="submit" value="update Task" className="border" />
        </form>
      </div>
    </div>
  );
};

export default EditPage;
