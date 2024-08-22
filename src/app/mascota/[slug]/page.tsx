'use client'
import { Loader } from '@/app/components/loader/loader';
import { Navbar } from '@/app/components/navbar/navbar';
import React, { useEffect, useState } from 'react';
import { useStore } from '@/store/store';
import { Sidebar } from '@/app/components/sidebar/sidebar';
import Image from 'next/image';

interface Props {
    params: {
        slug: string
    }
}

const Pet: React.FC<Props> = ({ params }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pet, setPet] = useState<any>({});
    const [owner, setOwner] = useState<any>({});
    const { getPetById, getUserById } = useStore();

    useEffect(() => {
        const getPet = async (): Promise<void> => {
            const pet = await getPetById(params.slug);

            setPet(pet);
        };

        getPet();
    }, [params.slug, getPetById]);

    useEffect(() => {
        const getOwner = async (): Promise<void> => {
            const user = await getUserById(pet.owner);

            setOwner(user);
            setIsLoading(false);
        }

        if (pet.owner) getOwner();
    }, [pet, getUserById]);


    return (
        <>
            <Navbar />
            {isLoading ? <Loader />
                :
                <main className='d-flex overflow-hidden'>
                    <Sidebar />
                    <section className='d-flex w-100 flex-column flex-lg-row min-vh-100 p-3 gap-2'>
                        <Image className='d-flex flex-grow-1 rounded-3 img-fluid align-self-center align-self-lg-start' style={{ objectFit: 'cover' }} src={pet.image} alt="pet image" width={483} height={711} />

                        <div className='d-flex flex-grow-1 flex-column gap-2'>
                            <article className='px-4 py-3 rounded-4 card mb-3' style={{ backgroundColor: '#B3A5D4' }}>
                                <h2>{pet.name}</h2>
                                <h4>{pet.age}, {pet.breed}, {pet.size}</h4>

                                <h6 className='mt-3 lh-sm'>{pet.description}</h6>
                                <h5>¿Esterilizado? {pet.stirilized ? 'Si' : 'No'}</h5>
                                <h5>Sexo: {pet.sex}</h5>
                            </article>
                            <article>
                                <h4 className='text-center'>Información del dueño</h4>
                                <div className='card p-3 d-flex flex-row align-items-center gap-4 justify-content-center'>
                                    <Image src={pet.image} className="object-fit-cover rounded-circle" alt="owner image" width={180} height={180} />
                                    <div>
                                        <h5>{owner.name}</h5>
                                        <h6>{owner.username}</h6>
                                        <p>{owner.email}</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>
                </main>
            }
        </>
    );
}

export default Pet;
