import React from 'react'

export const Pet = ({pet}) => {
    return (
        <div>
            <h2>
                <pre>{JSON.stringify(pet, null, 2)}</pre>
            </h2>
        </div>
    );

};