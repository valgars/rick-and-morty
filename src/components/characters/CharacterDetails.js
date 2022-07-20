import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
    let { id } = useParams();

    let [characters, setCharacters] = useState([]);
    let { name, location, origin, gender, image, status, species } = setCharacters;

    let API = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(API).then((res) => res.json());
            setCharacters(data);
        })();
    }, [API]);

    return  (<h5 className="header text-center">{image}</h5>)
   
}
export default CharacterDetails;
