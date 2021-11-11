import React from 'react'

export default function Donacion ( {texto} ) {

    return (
        <div>
            {<p>{texto ? texto : "Texto dinámico"}</p>}
        </div>
    )
}
