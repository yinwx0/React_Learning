import React from "react";

const Pagination = ({
  totalBooks,
  booksPerPage,
  currentPage,
  paginate,
  totalPages,
}) => {
  return (
    <div className="pagination">
      <button onClick={() => paginate(1)} disabled={currentPage === 1}>
        首页
      </button>
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        上一页
      </button>
      <span>
        {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        下一页
      </button>
      <button
        onClick={() => paginate(totalPages)}
        disabled={currentPage === totalPages}
      >
        末页
      </button>
    </div>
  );
};

export default Pagination;
