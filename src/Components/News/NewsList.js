import React from 'react';
import '../CardListStyles.css';
import Titles from '../Titles/Titles';
import { getDataNewsList } from '../../Services/NewsService'; //cambie table por List porque es una lista

const NewsList = ({ novedades }) => {

    return (
        <div>
            <Titles titulo="Novedades" />
            <ul className="list-container">
                {novedades.length > 0 ?
                    novedades.map((element) => {
                        return (
                            <li className="card-info" key={element.id}>
                                <h3>{element.name}</h3>
                                <p>{element.description}</p>
                            </li>
                        )
                    })
                    :
                    <p>No hay novedades</p>
                }
            </ul>
        </div>
    );
}

export default NewsList;