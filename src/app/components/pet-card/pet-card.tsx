import Image from 'next/image';
import React, { FC } from 'react';

export const PetCard: FC = () => {

    return (
        <article className="d-flex flex-row p-3 gap-3 rounded-4 shadow-sm" style={{ maxWidth: '330px', maxHeight: '180px', backgroundColor: '#D9D9D9' }}>
            <Image src="/img/chucho.jpeg" className="object-fit-cover rounded-4" alt="pet image" width={130} height={150} />
            <div>
                <h4 className="m-1">Pepillo</h4>
                <h6 className="m-1">8 meses</h6>
                <p className="m-1">Cruzado</p>
                <p className="m-1"> Tonayork, Mexico</p>
            </div>
        </article>
    );
}
