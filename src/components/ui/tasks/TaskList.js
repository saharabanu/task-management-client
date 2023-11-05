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
import { getUserInfo } from "@/services/auth.service";

const TaskList = () => {
  const {data} = useGetTasksQuery();
    const {email} = getUserInfo()
    const [filteredTasks, setFilteredTasks] = useState([]);
    useEffect(() => {
        if (data) {
          // Filter tasks based on the user's email
          const userTasks = data?.filter((item) => item.email === email);
          setFilteredTasks(userTasks);
        }
      }, [data, email]);
  
  

  return (
    <div className=" max-w-3xl mx-auto">
    


     


      

      {/*  data table or task table */}
      <TaskTable filteredTasks={filteredTasks} />
      {/* <div className="flex justify-center">
        
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div> */}
    </div>
  );
};

export default TaskList;





