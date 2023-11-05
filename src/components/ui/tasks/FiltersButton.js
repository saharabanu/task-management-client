import Link from 'next/link'
import React from 'react'

// const FiltersButton = ({ activeFilter, onFilterChange }) => {
//   return (
//     <>
//         <div className=" ">
//         <div>
//           <button
//             type="button"
//             className={`focus:outline-none text-white ${
//               filter === "All"
//                 ? "bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300"
//                 : "bg-gray-600 dark:bg-gray-700"
//             } font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
//             onClick={() => applyFilter("All")}
//           >
//             All
//           </button>
//           <button
//             type="button"
//             className={`focus:outline-none text-white ${
//               filter === "All"
//                 ? "bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300"
//                 : "bg-gray-600 dark:bg-gray-700"
//             } font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
//             onClick={() => setFilter("All")}
//           >
//             All
//           </button>
//           <button
//             type="button"
//             className={`focus:outline-none text-white ${
//               filter === "Complete"
//                 ? "bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300"
//                 : "bg-green-600 dark:bg-green-700"
//             } font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
//             onClick={() => applyFilter("Complete")}
//           >
//             Complete
//           </button>
//           <button
//             type="button"
//             className={`focus:outline-none text-white ${
//               filter === "Incomplete"
//                 ? "bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300"
//                 : "bg-red-600 dark:bg-red-700"
//             } font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
//             onClick={() => applyFilter("Incomplete")}
//           >
//             InComplete
//           </button>
//           <button
//             type="button"
//             className={`focus:outline-none text-white ${
//               filter === "High"
//                 ? "bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300"
//                 : "bg-red-600 dark:bg-red-700"
//             } font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
//             onClick={() => applyFilter("High")}
//           >
//             High
//           </button>
//           <button
//             type="button"
//             className={`focus:outline-none text-white ${
//               filter === "Low"
//                 ? "bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300"
//                 : "bg-green-600 dark:bg-green-700"
//             } font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
//             onClick={() => applyFilter("Low")}
//           >
//             Low
//           </button>
//           <button
//             type="button"
//             className={`focus:outline-none text-white ${
//               filter === "Yellow"
//                 ? "bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300"
//                 : "bg-yellow-600 dark:bg-yellow-700"
//             } font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
//             onClick={() => applyFilter("Yellow")}
//           >
//             Yellow
//           </button>

//           <Link href="/create">
//             <button
//               type="button"
//               className="focus:outline-none text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-800"
//             >
//               Add Task
//             </button>
//           </Link>
//         </div>
//       </div>


//     </>
//   )
// }

// export default FiltersButton





const FilterButtons = ({ activeFilter, onFilterChange }) => {
  return (
    <div>
      <button
        type="button"
        className={`focus:outline-none text-white ${
          activeFilter === "All"
            ? "bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300"
            : "bg-gray-600 dark:bg-gray-700"
        } font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
        onClick={() => onFilterChange("All")}
      >
        All
      </button>
      <button
        type="button"
        className={`focus:outline-none text-white ${
          activeFilter === "Complete"
            ? "bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300"
            : "bg-green-600 dark:bg-green-700"
        } font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
        onClick={() => onFilterChange("Complete")}
      >
        Complete
      </button>
      {/* Add other filter buttons similarly */}
    </div>
  );
};

export default FilterButtons;
