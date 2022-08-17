import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const { id } = useParams();
  
  const urlDetails = `https://rickandmortyapi.com/api/character/${id}`;
  const [characterDetails, setCharacterDetails] = useState([]);
  const { name, location, origin, gender, image, status, species } = characterDetails;

  useEffect(() => {
    (async function () {
      const data = await fetch(urlDetails).then((res) => res.json());
      setCharacterDetails(data);
    })();
  }, [urlDetails]);

  let statusColor;
  status === 'Dead' ?
    statusColor = 'dark' :
    (status === 'Alive' ? statusColor = 'success' : statusColor = 'secondary')

  return (
    <div className="container d-flex justify-content-center mt-3 ">
      <div className="d-flex flex-column gap-3 mb-2 col-5">
        <h1 className="text-center">{name}</h1>
        <img className="img-fluid" src={image} alt="" />
        <div className={`badge text-bg-${statusColor} fs-5`}>{status}</div>
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetails