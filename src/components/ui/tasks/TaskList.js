"use client";

import Error from "@/components/Error";
import TaskLoading from "@/components/Loader/TaskLoading";
import NoTask from "@/components/NoTask";
import { useDeleteTaskMutation, useGetTasksQuery } from "@/redux/api/apiSlice";
import Link from "next/link";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";

const TaskList = () => {
  // get all task query
  const { data, isError, isLoading } = useGetTasksQuery();
  const tasks = data?.data;
  let serialNumber = 0;

  // console.log(data)

  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <>
        <TaskLoading />
        <TaskLoading />
        <TaskLoading />
        <TaskLoading />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && tasks?.length === 0) {
    content = <NoTask message="No Task found!" />;
  }

  if (!isLoading && !isError && tasks?.length > 0) {
    content = tasks?.map((item) => {
      serialNumber++;
      return (
        <tr
          key={item?.id}
          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
        >
          <td className="whitespace-nowrap px-6 py-4 font-medium">{serialNumber}</td>
          <td className="whitespace-nowrap px-6 py-4 font-medium">{item?.title}</td>
          <td className="whitespace-nowrap px-6 py-4 font-medium">{item?.description}</td>
          <td
            className={`whitespace-nowrap px-6 py-4 font-medium ${
              item?.priority === "high"
                ? "text-red-500"
                : item?.priority === "low"
                ? "text-green-500"
                : item?.priority === "medium"
                ? "text-yellow-500"
                : ""
            }`}
          >
            {item?.priority}
          </td>
          <td
            className={`whitespace-nowrap px-6 py-4 font-medium ${
              item?.status === "complete" ? "text-green-500" : "text-red-500"
            }`}
          >
            {item?.status}
          </td>
          <td className="whitespace-nowrap px-6 py-4 font-medium">
            <Link href={`/edit/${item?.id}`}>
              <button className="font-medium">
                <BiSolidEdit />
              </button>
            </Link>
            <button className="px-3 font-8xl text-red-400" onClick={() => deleteFunc(item?.id)}>
              <MdDeleteForever />
            </button>
          </td>
          {/* <td className="whitespace-nowrap px-6 py-4">@mdo</td> */}
        </tr>
      );
    });
  }

  // delete task

  const [deleteTask] = useDeleteTaskMutation();

  // delete function

  const deleteFunc = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will delete this task!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(id);
        Swal.fire("Deleted!", "This task has been deleted.", "success");
      }
    });
  };

  return (
    <div className=" max-w-3xl mx-auto">
      <div className="flex justify-end items-center ">
        <Link href="/create">
          <button
            type="button"
            className="focus:outline-none text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Add Task
          </button>
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Task
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Priority
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                    {/* <th scope="col" className="px-6 py-4">Handle</th> */}
                  </tr>
                </thead>
                <tbody>{content}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
