'use client'
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';
import { FiltrerMenu } from './components/filtrer-menu/filtrer-menu';
import { PetCard } from './components/pet-card/pet-card';
import { Loader } from './components/loader/loader';
import { useStore } from '@/store/store';

const Home: FC = () => {
    const { isLoading, changeLoader, user, getAllPublications } = useStore()
    const [pets, setPets] = useState([]);

    const getAllPets = useCallback(async (): Promise<void> => {
        const pets: any = await getAllPublications();

        setPets(pets);
        changeLoader(false);
    }, [getAllPublications, changeLoader]);

    useEffect(() => {
        getAllPets();
    }, [getAllPets]);

    return (
        isLoading ? <Loader /> :
            <>
                <Navbar />
                <main className='d-flex overflow-hidden' style={{ maxHeight: '90vh' }}>
                    <Sidebar />
                    <article className='d-flex flex-column overflow-scroll px-3'>
                        <FiltrerMenu />
                        <div className='d-flex flex-wrap gap-2'>
                            {pets && pets.length > 0 ?
                                pets.map((pet, index) => <PetCard key={index} pet={pet} />) 
                                :
                                <p>No hay publicaciones</p>
                            }
                        </div>
                    </article>
                </main>
            </>
    );
}

export default Home;
