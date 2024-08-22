import { PetResponse } from '@/types/pets';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface Props {
    pet: PetResponse
}

export const PetCard: FC<Props> = ({ pet }) => {
    const router: any = useRouter();

    const handleClick = (): void => {
        router.push(`/mascota/${pet._id}`);
    }

    return (
        <article className="d-flex flex-row p-3 gap-3 rounded-4 shadow-sm" style={{ maxWidth: '330px', maxHeight: '180px', backgroundColor: '#fff', cursor: 'pointer' }} onClick={handleClick}>
            <Image src={pet.dataUrl} className="object-fit-cover rounded-4" alt="pet image" width={130} height={150} />
            <div>
                <h4 className="m-1">{pet.name}</h4>
                <h6 className="m-1">{pet.age}</h6>
                <p className="m-1">{pet.breed}</p>
                <p className="m-1"> Tonayork, Mexico</p>
            </div>
        </article>
    );
}
