import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const Loader = () => {
    return (
        <div className="form--container">
            <div className="input-field">
                <Skeleton animation="wave" />
            </div>
            <div className="input-field">
                <Skeleton animation="wave" />
            </div>
            <div className="input-field">
                <Skeleton animation="wave" />
            </div>
        </div>
    )
}
export default Loader;