import Image from 'next/image';
import React, { FC } from 'react';

export const PetCard: FC = () => {

    return (
        <div className="card border-0" style={{ width: '13rem', height: '18rem' }}>
            <Image src="/img/chucho.jpeg" className="card-img-top object-fit-cover " alt="pet image" width={210} height={230} />
            <div className='card-body d-flex align-items-center p-1'>
                <Image src="https://github.com/mdo.png" alt="image-caretakeer" width="38" height="38" className="rounded-circle me-2" />
                <p className='m-0'>Jose pepe</p>
            </div>
        </div>
    );
}

