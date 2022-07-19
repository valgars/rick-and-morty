import React from 'react'

const CharacterCard = ({ result }) => {
    //  Character status color
    let statusColor;
    result.status === 'Dead' ?
        statusColor = 'dark' :
        (result.status === 'Alive' ? statusColor = 'success' : statusColor = 'secondary')
    return (
        <div className="card mt-3 col-5 p-0 border-dark text-center" >
            <div className="row g-7">
                <div className="col-md-4 ">
                    <img src={result.image} className="img-fluid rounded-start " alt='character' />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{result.name}</h5>
                        <span className={`badge text-bg-${statusColor}`}>{result.status}</span>
                        <p className="card-text mb-1"><small className="text-muted">Last known location:</small></p>
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