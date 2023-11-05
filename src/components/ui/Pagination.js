'use client'


const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
    
  
    return (
        <nav aria-label="Page navigation example">
        <ul className="list-style-none flex">
          {currentPage > 1 && (
            <li>
              <a
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                href="#"
                aria-label="Previous"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
          )}
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index}>
              <a
                className={`relative block rounded bg-transparent px-3 py-1.5 text-sm ${
                  currentPage === index + 1
                    ? "text-neutral-900 bg-neutral-100 dark:text-white dark:bg-neutral-700"
                    : "text-neutral-600 hover-bg-neutral-100 dark-hover:bg-neutral-700 dark-text-white"
                } transition-all duration-300`}
                href="#"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}

          {currentPage < totalPages && (
            <li>
              <a
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                href="#"
                aria-label="Next"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          )}
        </ul>
      </nav>
    );
  };
  
  export default Pagination;
  