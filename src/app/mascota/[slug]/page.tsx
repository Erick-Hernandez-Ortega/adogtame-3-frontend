'use client'
import { Loader } from '@/app/components/loader/loader';
import { Navbar } from '@/app/components/navbar/navbar';
import React, { useEffect, useState } from 'react';
import { useStore } from '@/store/store';

interface Props {
    params: {
        slug: string
    }
}

const Pet: React.FC<Props> = ({ params }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { getPetById } = useStore();
    
    useEffect(() => {
        const getPet = async (): Promise<void> => {
            const pet = await getPetById(params.slug);
            console.log(pet);
        };

        getPet();
    }, [params.slug, getPetById]);

    return (
        <>
            <Navbar />
            {isLoading ? <Loader />
                :
                <main>
                    <p>soy mascota {params.slug}</p>
                </main>
            }
        </>
    );
}

export default Pet;
