'use client'

import Link from "next/link";

const TaskFilter = ({
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  sortOrder,
  setSortOrder,
  resetFilters,
}) => {
  return (
    <div className="flex flex-wrap items-center space-y-4 sm:space-y-0 sm:space-x-4">
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
          className="bg-gray-300 hover:bg-gray-400 focus:ring focus:ring-gray-500 text-gray-800 font-medium rounded-md py-1 px-4 focus:outline-none"
        >
          Reset Filters
        </button>
      </div>
      <div className="w-full sm:w-auto">
    <Link href="/create">
      
        <button
          type="button"
          className="focus:outline-none text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md py-2 px-5 mb-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Add Task
        </button>
      
    </Link>
  </div>
    </div>
  );
};

export default TaskFilter;



