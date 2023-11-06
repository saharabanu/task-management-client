'use client'

import Link from "next/link";
import Searchebar from "./Searchebar";

const TaskFilter = ({
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  sortOrder,
  setSortOrder,
  resetFilters,
  searchQuery,
  setSearchQuery
}) => {
  return (
    <div className="flex flex-wrap items-center space-y-4 sm:space-y-0 sm:space-x-4">
    <div className="w-full sm:w-auto">
    <input
      type="search"
      className=" bg-gray-200  p-3 border-solid border-2 border-blue-200 outline-none"
      placeholder="Search by title"
      aria-label="Search"
      value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}

       />
      </div>
      {/* Status filter */}
      <div className="w-full sm:w-auto">
        <label className="block text-gray-600">Status:</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full sm:w-40 bg-white border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">All</option>
          <option value="complete">Complete</option>
          <option value="inCompleted">Incompleted</option>
        </select>
      </div>

      {/* Priority filter */}
      <div className="w-full sm:w-auto">
        <label className="block text-gray-600">Priority:</label>
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="w-full sm:w-40 bg-white border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      {/* Sort filter */}
      <div className="w-full sm:w-auto">
        <label className="block text-gray-600">Sort:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full sm:w-40 bg-white border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="asc">Oldest First</option>
          <option value="desc">Newest First</option>
        </select>
      </div>
      
      {/* Reset button */}
      <div className="w-full sm:w-auto">
        <button
          onClick={resetFilters}
          className="focus:outline-none text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md py-2 px-5 mb-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Reset Filters
        </button>
      </div>
      
      
    </div>
  );
};

export default TaskFilter;



