import React, { FC } from 'react';

interface FilterProps {
    children: React.ReactNode;
    isActive: boolean
    // Otros tipos de propiedades aquí
}

export const Filtrer: FC<FilterProps> = ({ children, isActive }) => {

    return (
        <button type="button" className='btn btn-light rounded-4 d-flex gap-1 '>
            {children}
        </button>
    );
}

