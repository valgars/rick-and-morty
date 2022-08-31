import React, { useState, useEffect } from 'react';
import EpisodesTable  from '../components/episodes/EpisodesTable';
import ReactPaginate from 'react-paginate';

const Episodes  = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  const { info, results } = episodes;

  let urlEpisodes = `https://rickandmortyapi.com/api/episode?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(urlEpisodes).then((res) => res.json());
      setEpisodes(data);
    })();
  }, [urlEpisodes]);

  const onPageChange = (item) => {
    setPageNumber(item.selected + 1);
  }
 
  return (
    <div className='container'>
      <div className='my-5 col-10 text-center table-responsive w-100'>
        <EpisodesTable
          results={results}
        />
  
        <ReactPaginate
          pageCount={info?.pages || 3}
          onPageChange={onPageChange}
          forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
          className="pagination justify-content-center my-5 gap-2 "
          previousClassName="btn fs-5 "
          nextClassName="btn fs-5 "
          activeClassName="active"
          pageClassName="page-item"
          pageLinkClassName="page-link"
        />
      </div>
    </div>
  )
}


export default Episodes;