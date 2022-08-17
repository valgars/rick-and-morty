import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  const onPageChange = (item) => {
    setPageNumber(item.selected + 1);
  }
  return (
    <ReactPaginate
      pageCount={info?.pages || 42}
      onPageChange={onPageChange}
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      className="pagination justify-content-center my-5 gap-2"
      previousClassName="btn fs-5 prev"
      nextClassName="btn fs-5 next"
      activeClassName="active"
      pageClassName="page-item"
      pageLinkClassName="page-link"
    />
  )
}

export default Pagination