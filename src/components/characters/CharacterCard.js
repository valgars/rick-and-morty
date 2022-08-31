import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ result, id, page }) => {
    const { name, image, status, location, species } = result;
    let statusColor;
    status === 'Dead' ?
        statusColor = 'dark' :
        (status === 'Alive' ? statusColor = 'success' : statusColor = 'secondary')
    return (

        <div className='card col-lg-2 col-md-3 col-sm-4 text-center mx-1 my-1 px-0 '>
            <Link
                to={`${page}${id}`}
                className="text-dark text-decoration-none "
            >
            <img src={image} className="card-img-top" alt="character" />
            <div className='card-body'>
                <h5 className="card-title fs-4">{name}</h5>
                <div className='d-flex justify-content-center align-items-center'>
                    <span className={`badge rounded-pill text-bg-${statusColor} p-2 mx-1 `}>
                        {status}
                    </span>
                    <p className='card-text'> - {species}</p>

                </div>
                <p className="card-text mb-0 "><small className="text-muted">Last known location:</small></p>
                <p className="card-text ">{location.name}</p>
            </div>
            </Link >
        </div>
    )
}

export default CharacterCard