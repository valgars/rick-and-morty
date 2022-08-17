import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterCard from './CharacterCard'

const CharactersList = ({ results }) => {
    return (
        results ? (
            results.map((result) => (
                <CharacterCard
                    result={result}
                    key={result.id}
                />
            ))
        ) : <Spinner />
    )
}

export default CharactersList