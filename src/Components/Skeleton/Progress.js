import React from 'react';
import Loader from 'react-loader-spinner';
import "./styles.css";

export default function Progress () {
    return (
        <Loader 
            className="progress" 
            type="TailSpin" 
            color="#00BFFF" 
            height={80} 
            width={80} 
        />
    )
}
