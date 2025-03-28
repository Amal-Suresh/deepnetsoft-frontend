import React from "react";
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null; // Hide pagination if only one page

  return (
    <div className="flex justify-center mt-4 space-x-2">
      {/* First Page Button */}
      <button 
        onClick={() => onPageChange(1)} 
        disabled={currentPage === 1} 
        className="px-3 py-1 bg-gray-800 text-white border border-white rounded disabled:opacity-50 flex items-center"
      >
        <FaAngleDoubleLeft />
      </button>

      {/* Previous Button */}
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1} 
        className="px-3 py-1 bg-gray-800 text-white border border-white rounded disabled:opacity-50 flex items-center"
      >
        <FaAngleLeft />
      </button>

      {/* Page Number Display */}
      <span className="px-3 py-1 bg-gray-800 text-white border border-white rounded">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages} 
        className="px-3 py-1 bg-gray-800 text-white border border-white rounded disabled:opacity-50 flex items-center"
      >
        <FaAngleRight />
      </button>

      {/* Last Page Button */}
      <button 
        onClick={() => onPageChange(totalPages)} 
        disabled={currentPage === totalPages} 
        className="px-3 py-1 bg-gray-800 text-white border border-white rounded disabled:opacity-50 flex items-center"
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
};

export default Pagination;