"use client";
import { useGetSingleTaskQuery, useUpdateTaskMutation } from "@/redux/api/apiSlice";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const EditPage = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const { register, handleSubmit, reset, control } = useForm();
  const { data } = useGetSingleTaskQuery(id);
  // console.log(data)
  const [updateTask] = useUpdateTaskMutation();

  //  console.log(data?.data, data?.data?.title, 'from single api')

  const onSubmit = async (values) => {
    try {
      // console.log(values);
      const res = await updateTask({ id, ...values });
      if (res) {
        toast.success("task updated successfully");
        router.push("/")
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const defaultValues={
    title: data?.title,
    description:data?.description,
    priority:data?.priority,
    status: data?.status
  }
  
  return (
    <div className="flex justify-center items-center">
    <div className="block max-w-lg rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mt-36">
      <form onSubmit={handleSubmit(onSubmit)} defaultValues={defaultValues}>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            {...register("title")}
            name="title"
            defaultValue={data?.title}
           required
            
            className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput7"
            placeholder="Name"
          />
          {/* <label
            for="exampleInput7"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary "
          >
            Task Name
          </label> */}
        </div>

        <div className="relative mb-6" data-te-input-wrapper-init>
          <textarea
            {...register("description")}defaultValue={data?.description}
           
           required
            name="description"
            className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Task Description"
          ></textarea>
          {/* <label
            for="exampleFormControlTextarea13"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            Task Description
          </label> */}
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <select {...register("priority")} defaultValue={data?.priority}
            required
            data-te-select-init
            className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          >
            <option value="high">High</option>
            <option value="low">low</option>
            <option value="medium">medium</option>
          </select>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <select {...register("status")} defaultValue={data?.status}
            
            data-te-select-init
            className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          >
            <option value="complete">Complete</option>
            <option value="inComplete">inComplete</option>
           
          </select>
        </div>

        <input
          type="submit"
          value="Update Task"
          className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        />
      </form>
    </div>
    </div>
  );
};

export default EditPage;
