import React, { FC } from 'react';

interface FilterProps {
    children: React.ReactNode;
    isActive: boolean,
    onClick: () => void
}

export const Filtrer: FC<FilterProps> = ({ children, isActive, onClick }) => {

    return (
        <button type="button" className='btn rounded-4 d-flex gap-1 btn-light' style={{ backgroundColor: isActive ? '#B3A5D4' : "#fff" }} onClick={onClick}>
            {children}
        </button>
    );
}

