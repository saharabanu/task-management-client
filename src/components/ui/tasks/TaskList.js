"use client";

import { useDeleteTaskMutation, useGetTasksQuery } from "@/redux/api/apiSlice";
import Swal from "sweetalert2";

const TaskList = () => {
  // get all task query
  const { data } = useGetTasksQuery();
  const tasks = data?.data;
  // console.log(data)

  // delete task

  const [deleteTask] = useDeleteTaskMutation();

  // delete function

  const deleteFunc = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will delete this task!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(id)
        Swal.fire(
          'Deleted!',
          'This task has been deleted.',
          'success'
        )
      }
    })
  };

  return (
    <div className=" border max-w-3xl mx-auto">
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <hr />
          <tbody>
            {tasks?.map((item) => (
              <tr key={item?.id}>
                <td>{item?.title} </td>
                <td className="pl-5">{item?.description}</td>
                <td className="pl-5">{item?.priority}</td>
                <td className="pl-5">{item?.status}</td>

                <td className="pl-5">
                  <button className="">Edit</button>
                  <button className="px-3" onClick={() =>deleteFunc(item?.id)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
