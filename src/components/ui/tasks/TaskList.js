"use client";

import Link from "next/link";
import Swal from "sweetalert2";

import React, { useState, useEffect } from "react";
import Pagination from "../Pagination";
import TaskTable from "./TaskTable";
import NoTask from "@/components/NoTask";
import Error from "@/components/Error";
import TaskLoading from "@/components/Loader/TaskLoading";
import FiltersButton from "./FiltersButton";
import { list } from "postcss";
import { useDeleteTaskMutation, useGetTasksQuery } from "@/redux/api/apiSlice";

const TaskList = () => {
  const [filter, setFilter] = useState("All");

  const [filteredTasks, setFilteredTasks] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  // get all task query
  const { data, isError, isLoading } = useGetTasksQuery();
 
  

  // filter option

  // Function to apply filtering
  const applyFilter = (filterValue) => {
    setFilter(filterValue);
    if (filterValue === "All") {
      // Show all tasks
      setFilteredTasks(data);
    } else {
      // Filter tasks based on the selected criteria
      setFilteredTasks(
        data?.filter((item) => {
          if (filterValue === "Complete") {
            return item.status === "complete";
          } else if (filterValue === "Incomplete") {
            return item.status !== "complete";
          } else if (filterValue === "High") {
            return item.priority === "high";
          } else if (filterValue === "Low") {
            return item.priority === "low";
          } else if (filterValue === "Yellow") {
            return item.priority === "medium";
          }
        })
      );
    }
    setCurrentPage(1);
  };

  useEffect(() => {
    // Update total pages when filteredTasks change
    const itemsPerPage = 5;
    setTotalPages(Math.ceil(filteredTasks?.length / itemsPerPage));
  }, [filteredTasks]);
  // useEffect(() => {
  //   setFilter("All");
  // }, []);

  //paginate option

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  //  current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredTasks?.slice(startIndex, endIndex);

  // console.log(data)

  // delete task

 

  // delete function

  // const deleteFunc = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You will delete this task!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       deleteTask(id);
  //       Swal.fire("Deleted!", "This task has been deleted.", "success");
  //     }
  //   });
  // };
  

  return (
    <div className=" max-w-3xl mx-auto">
    

{/* <FiltersButton activeFilter={filter} onFilterChange={setFilter} /> */}
      <div className=" ">
        <div>
          <button
            type="button"
            className={`focus:outline-none text-white ${
              filter === "All"
                ? "bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300"
                : "bg-gray-600 dark:bg-gray-700"
            } font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
            onClick={() => applyFilter("All")}
          >
            All
          </button>
         
          <button
            type="button"
            className={`focus:outline-none text-white ${
              filter === "Complete"
                ? "bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300"
                : "bg-green-600 dark:bg-green-700"
            } font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
            onClick={() => applyFilter("Complete")}
          >
            Complete
          </button>
          <button
            type="button"
            className={`focus:outline-none text-white ${
              filter === "Incomplete"
                ? "bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300"
                : "bg-red-600 dark:bg-red-700"
            } font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
            onClick={() => applyFilter("Incomplete")}
          >
            InComplete
          </button>
          <button
            type="button"
            className={`focus:outline-none text-white ${
              filter === "High"
                ? "bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300"
                : "bg-red-600 dark:bg-red-700"
            } font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
            onClick={() => applyFilter("High")}
          >
            High
          </button>
          <button
            type="button"
            className={`focus:outline-none text-white ${
              filter === "Low"
                ? "bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300"
                : "bg-green-600 dark:bg-green-700"
            } font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
            onClick={() => applyFilter("Low")}
          >
            Low
          </button>
          <button
            type="button"
            className={`focus:outline-none text-white ${
              filter === "Yellow"
                ? "bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300"
                : "bg-yellow-600 dark:bg-yellow-700"
            } font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
            onClick={() => applyFilter("Yellow")}
          >
            Medium
          </button>

          <Link href="/create">
            <button
              type="button"
              className="focus:outline-none text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Add Task
            </button>
          </Link>
        </div>
      </div>


      

      {/*  data table or task table */}
      <TaskTable currentData={currentData}  filteredTasks={filteredTasks} />
      <div className="flex justify-center">
        {/* pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default TaskList;
