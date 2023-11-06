"use client";

import React, { useState, useEffect } from "react";

import TaskTable from "./TaskTable";

import { useGetTasksQuery } from "@/redux/api/apiSlice";
import { getUserInfo } from "@/services/auth.service";
import Pagination from "../Pagination";
import Link from "next/link";
import TaskFilter from "./TaskFilter";

const TaskList = () => {
  const { data } = useGetTasksQuery();
  console.log(data);
  const { email } = getUserInfo();
  const [filteredTasks, setFilteredTasks] = useState([]);
  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  // for filtering
  const [statusFilter, setStatusFilter] = useState(""); // Filter by status
  const [priorityFilter, setPriorityFilter] = useState(""); // Filter by priority
  const [sortOrder, setSortOrder] = useState("asc");

  const tasksPerPage = 5;
  useEffect(() => {
    if (data) {
      // Filter tasks based on the user's email
      const userTasks = data?.filter((item) => item.email === email);

      // Apply filters
      let filteredData = userTasks;
      if (statusFilter) {
        filteredData = filteredData.filter((item) => item.status === statusFilter);
      }
      if (priorityFilter) {
        filteredData = filteredData.filter((item) => item.priority === priorityFilter);
      }

      // Sort the data
      // if (sortOrder === "asc") {
      //   filteredData.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
      // } else {
      //   filteredData.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      // }
      if (sortOrder === "asc") {
        filteredData.sort((a, b) => Date.parse(a.updatedAt) - Date.parse(b.updatedAt));
      } else {
        filteredData.sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));
      }

      setFilteredTasks(filteredData);
    }
  }, [data, email, statusFilter, priorityFilter, sortOrder]);

  const totalTasks = filteredTasks?.length;
  const totalPages = Math.ceil(totalTasks / tasksPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedTasks = filteredTasks?.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );
  const resetFilters = () => {
    setStatusFilter("");
    setPriorityFilter("");
  };

  return (
    <div className=" max-w-4xl mx-auto">
      {/*  data table or task table */}
      <TaskFilter
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        resetFilters={resetFilters}
      />

      <hr />
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
