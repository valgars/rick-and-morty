import React from 'react';

const EpisodesTable = ({ results }) => {
    return (
        <table className='table table-bordered'>

            <thead className='table-dark'>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Episode</th>
                    <th scope="col">Air Date</th>
                </tr>
            </thead>
            <tbody>
                {results?.map(result => {
                    return (
                        <tr key={result.id}>
                            <td>{result.id}</td>
                            <td>{result.name}</td>
                            <td>{result.episode}</td>
                            <td>{result.air_date}</td>
                        </tr>
                    );
                })}
            </tbody>

        </table >
    )
}

export default EpisodesTable;