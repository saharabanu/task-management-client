"use client";

import React, { useState, useEffect } from "react";

import TaskTable from "./TaskTable";

import { useGetTasksQuery } from "@/redux/api/apiSlice";
import { getUserInfo } from "@/services/auth.service";
import Pagination from "../Pagination";

const TaskList = () => {
  const { data } = useGetTasksQuery();
  const { email } = getUserInfo();
  const [filteredTasks, setFilteredTasks] = useState([]);
  //for pagination
  const [currentPage, setCurrentPage] = useState(1); 
  const tasksPerPage = 1;
  useEffect(() => {
    if (data) {
      // Filter tasks based on the user's email
      const userTasks = data?.filter((item) => item.email === email);
      setFilteredTasks(userTasks);
    }
  }, [data, email]);

  const totalTasks = filteredTasks?.length;
  const totalPages = Math.ceil(totalTasks / tasksPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedTasks = filteredTasks?.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

  return (
    <div className=" max-w-3xl mx-auto">
      {/*  data table or task table */}
      <TaskTable filteredTasks={paginatedTasks} />
      <div className="flex justify-center">
        
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
