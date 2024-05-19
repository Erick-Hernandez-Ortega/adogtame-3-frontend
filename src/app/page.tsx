'use client'
import React, { FC } from 'react';
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';
import { FiltrerMenu } from './components/filtrer-menu/filtrer-menu';
import { PetCard } from './components/pet-card/pet-card';
import { Loader } from './components/loader/loader';
import { useStore } from '@/store/store';

const Home: FC = () => {
    const { isLoading, changeLoader } = useStore()

    return (
        isLoading ? <Loader /> :
            <>
                <Navbar />
                <main className='d-flex overflow-hidden' style={{ maxHeight: '90vh' }}>
                    <Sidebar />
                    <article className='d-flex flex-column overflow-scroll px-3'>
                        <FiltrerMenu />
                        <div className='d-flex flex-wrap gap-2'>
                            <PetCard />
                            <PetCard />
                            <PetCard />
                            <PetCard />
                            <PetCard />
                            <PetCard />
                            <PetCard />
                            <PetCard />
                            <PetCard />
                            <PetCard />
                            <PetCard />
                            <PetCard />
                            <PetCard />
                            <PetCard />
                            <PetCard />
                            <PetCard />
                            <PetCard />
                        </div>
                    </article>
                </main>
            </>
    );
}

export default Home;
