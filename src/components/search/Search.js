import React from 'react'

const Search = ({ setSearch, setPageNumber }) => {
    let searchBtn = (e) => {
        e.preventDefault();
    }

    return (
        <form
            className='d-flex justify-content-center my-4 fs-6'
        >
            <input
                onChange={(e) => {
                    setPageNumber(1);
                    setSearch(e.target.value);
                }}
                className="p-2 mx-2"
                placeholder="Search characters..."
                type="text"
            />
            <button
                onClick={searchBtn}
                className='btn btn-dark fs-5'
            >
                Search
            </button>
        </form>
    )
}

export default Search