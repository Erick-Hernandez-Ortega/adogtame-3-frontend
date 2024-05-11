import React, { FC } from 'react';
import "./styles.css";

export const Loader: FC = () => {

    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100'>
            <span className="loader"></span>
        </div>
    );
}

