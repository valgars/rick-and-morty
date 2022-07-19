import React from 'react'

const CharacterCard = ({ result }) => {
    //  Character status color
    let statusColor;
    result.status === 'Dead' ?
        statusColor = 'dark' :
        (result.status === 'Alive' ? statusColor = 'success' : statusColor = 'secondary')
    return (
        <div className="card mt-3 col-5 p-0 border-dark text-center" >
            <div className="row g-0">
                <div className="col-md-6 ">
                    <img src={result.image} className="img-fluid rounded-start " alt='character' />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{result.name}</h5>
                        <div className='d-flex justify-content-center'>
                            <span className={`badge text-bg-${statusColor} p-2 `}>
                                {result.status}
                            </span> - <p className='card-text'>{result.species}</p>
                        </div>
                        <p className="card-text my-3"><small className="text-muted">Last known location:</small></p>
                        <p className="card-text">{result.location.name}</p>
                        <p className="card-text mb-1"><small className="text-muted">First seen in:</small></p>
                        <p className="card-text">{result.location.name}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard