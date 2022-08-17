import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterCard from './CharacterCard'

const CharactersList = ({ results, page }) => {
    return (
        results ? (
            results.map((result) => (
                <CharacterCard
                    result={result}
                    key={result.id}
                    id={result.id}
                    page="/"
                />
            ))
        ) : <Spinner />
    )
}

export default CharactersList