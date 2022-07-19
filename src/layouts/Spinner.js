import React from 'react'

const Spinner = () => {
    return (
        <div className='d-flex justify-content-center align-items-center my-3'>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    )
}

export default Spinner