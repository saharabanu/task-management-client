"use client";

import { useGetSingleTaskQuery, useUpdateTaskMutation } from "@/redux/api/apiSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const EditPage = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const { register, handleSubmit, setValue } = useForm();
  const { data } = useGetSingleTaskQuery(id);

  const [updateTask] = useUpdateTaskMutation();
  useEffect(() => {
    if (data) {
      setValue("title", data?.title);
      setValue("description", data?.description);
      setValue("priority", data?.priority);
      setValue("status", data?.status || "");
    }
  }, [data, setValue]);

  const onSubmit = async (values) => {
    try {
      // console.log(values);
      const res = await updateTask({ id, ...values });
      if (res) {
        toast.success("task updated successfully");
        router.push("/");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const defaultValues = {
    title: data?.title,
    description: data?.description,
    priority: data?.priority,
    status: data?.status,
  };

  return (
    <div className="m-auto max-w-4xl">
      <div className="block max-w-lg rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mt-36">
        <form onSubmit={handleSubmit(onSubmit)} defaultValues={defaultValues}>
          <div className="relative mb-6" data-te-input-wrapper-init>
            {data?.title && (
              <input
                {...register("title")}
                name="title"
                defaultValue={data?.title}
                required
                className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput7"
                placeholder="Name"
              />
            )}
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            {data?.description && (
              <textarea
                {...register("description")}
                required
                name="description"
                className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Task Description"
              ></textarea>
            )}
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            {data?.priority && (
              <select
                {...register("priority")}
                defaultValue={data?.priority}
                required
                data-te-select-init
                className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              >
                <option value="high">High</option>
                <option value="low">low</option>
                <option value="medium">medium</option>
              </select>
            )}
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            {data?.status && (
              <select
                {...register("status")}
                name="status"
                defaultValue={data?.status}
                required
                data-te-select-init
                className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              >
                <option value="complete">Complete</option>
                <option value="inComplete">inComplete</option>
              </select>
            )}
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
      {data?.status}
    </div>
  );
};

export default EditPage;
