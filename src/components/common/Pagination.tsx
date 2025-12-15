import React, { useEffect } from "react";

interface PaginationProps {
  currentPage: number; // 1-based
  limit: number;
  totalItems: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  setPageSize: (size: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  limit,
  totalPages,
  setCurrentPage,
  totalItems,
}) => {
  const maxPageNumbers = 5;

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage, setCurrentPage]);

  const handleClick = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const generatePageNumbers = (): (number | string)[] => {
    const sidePages = Math.floor(maxPageNumbers / 2);

    if (totalPages <= maxPageNumbers) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= sidePages + 1) {
      return [
        ...Array.from({ length: maxPageNumbers - 1 }, (_, i) => i + 1),
        "…",
        totalPages,
      ];
    }

    if (currentPage >= totalPages - sidePages) {
      return [
        1,
        "…",
        ...Array.from(
          { length: maxPageNumbers - 1 },
          (_, i) => totalPages - maxPageNumbers + 2 + i
        ),
      ];
    }

    return [
      1,
      "…",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "…",
      totalPages,
    ];
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mt-6">
      <p className="mb-2 sm:mb-0 text-xs font-semibold text-gray-500">
      Showing {(currentPage - 1) * limit + 1} to {Math.min(currentPage * limit, totalItems)} of {totalItems} entries
      </p>

      <ul className="inline-flex items-center space-x-1 text-sm">
        <li>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
             className={`px-2.5 py-1 rounded-md border border-gray-400 text-blue-600 hover:bg-gray-100 transition ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Previous
          </button>
        </li>

        {generatePageNumbers().map((page, index) => (
          <li key={index}>
            {typeof page === "number" ? (
              <button
                onClick={() => handleClick(page)}
                className={`px-2.5 py-1 rounded-md border ${
                  currentPage === page
                    ? "bg-blue-600 text-white border-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                } transition`}
              >
                {page}
              </button>
            ) : (
              <span className="px-2.5 py-1 text-gray-500">…</span>
            )}
          </li>
        ))}

        <li>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-2.5 py-1 rounded-md border border-gray-400 text-blue-600 hover:bg-gray-100 transition ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;