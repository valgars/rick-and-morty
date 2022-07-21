import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageNumber, setPageNumber }) => {

  const onPageChange = (data) => {
    setPageNumber(data.selected + 1);
  }

  return (
    <ReactPaginate
      pageCount={42}
      onPageChange={onPageChange}
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      className="pagination justify-content-center my-5 gap-3"
      previousLabel="<<"
      nextLabel=">>"
      previousClassName="btn fs-5 prev"
      nextClassName="btn fs-5 next"
      activeClassName="active"
      pageClassName="page-item"
      pageLinkClassName="page-link"
    />
  )
}

export default Pagination;