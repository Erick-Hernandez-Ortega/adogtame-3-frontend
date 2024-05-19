'use client'
import React, { useState, FC } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';
import { FiltrerMenu } from './components/filtrer-menu/filtrer-menu';
import { PetCard } from './components/pet-card/pet-card';
import { Loader } from './components/loader/loader';
import { User } from '@/types/user';
import { useStore } from '@/store/store';

const Home: FC = () => {
    const { isLoading, changeLoader } = useStore()

    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    return (
        isLoading ? <Loader /> :
            <>
                <Navbar />
                <main className='d-flex overflow-hidden' style={{ maxHeight: '90vh' }}>
                    <Sidebar user={user} />
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
                    {/* <h1>Home component</h1>
            <button onClick={handleLogout}>Cerrar sesion</button> */}
                </main>
            </>
    );
}

export default Home;
