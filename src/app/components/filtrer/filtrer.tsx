import React, { FC } from 'react';

interface FilterProps {
    children: React.ReactNode;
    isActive: boolean,
    onClick: () => void
}

export const Filtrer: FC<FilterProps> = ({ children, isActive, onClick }) => {

    return (
        <button type="button" className='btn rounded-4 d-flex gap-1 btn-light' style={{ backgroundColor: isActive ? '#e1dafa' : "#f3f3f3" }} onClick={onClick}>
            {children}
        </button>
    );
}

