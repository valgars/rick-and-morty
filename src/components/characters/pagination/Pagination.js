import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {


  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      pageCount={42}
      previousLabel="< previous"
      renderOnZeroPageCount={null}

    />
  )
}

export default Pagination