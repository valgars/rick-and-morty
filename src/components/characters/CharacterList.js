import React from 'react';
import Spinner from '../../layouts/Spinner';
import CharacterCard from './CharacterCard';

const CharacterList = ({ results }) => {
    return (
        results ? (
            <div className='row d-flex justify-content-around'>
                {results.map((result) => (
                    <CharacterCard key={result.id} result={result} />
                ))}
            </div>) : <Spinner />
    )
}


export default CharacterList