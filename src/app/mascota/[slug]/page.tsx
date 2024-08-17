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
    const { getPetById } = useStore();
    
    useEffect(() => {
        const getPet = async (): Promise<void> => {
            const pet = await getPetById(params.slug);
            console.log(pet);

            setPet(pet);
            setIsLoading(false);
        };

        getPet();
    }, [params.slug, getPetById]);

    return (
        <>
            <Navbar />
            {isLoading ? <Loader />
                :
                <main className='d-flex overflow-hidden'>
                    <Sidebar />
                    <section className='d-flex bg-danger w-100 min-vh-100 p-3 gap-2'>
                        <Image className='bg-primary d-flex flex-grow-1 rounded-3' style={{ maxWidth: '485px', maxHeight: '711px', objectFit: 'cover' }} src={pet.image} alt="pet image" width={485} height={711}  />

                        <div className='bg-warning d-flex flex-grow-1 flex-column gap-2'>
                            <article className='px-4 py-3 rounded-4 card' style={{ backgroundColor: '#B3A5D4' }}>
                                <h2>{pet.name}</h2>
                                <h4>{pet.age}, {pet.breed}, {pet.size}</h4>

                                <h6 className='mt-3 lh-sm'>{pet.description}</h6>
                                <h5>¿Esterilizado? {pet.stirilized ? 'Si' : 'No'}</h5>
                                <h5>Sexo: {pet.sex}</h5>
                            </article>
                            <article>
                                <h4 className='text-center'>Información del dueño</h4>
                                <div className='card'>

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
