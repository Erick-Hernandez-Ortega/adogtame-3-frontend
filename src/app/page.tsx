'use client'
import React, { useState, useEffect, FC } from 'react';
import { useRouter } from 'next/navigation';
import { userLogout } from '@/utils/userAPI';
import { AxiosError, AxiosResponse } from 'axios';
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';
import { FiltrerMenu } from './components/filtrer-menu/filtrer-menu';
import { PetCard } from './components/pet-card/pet-card';
import { Loader } from './components/loader/loader';
import { User } from '@/types/user';

const Home: FC = () => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User | null>(null);

    const handleLogout = async (): Promise<void> => {
        const response: AxiosResponse | AxiosError = await userLogout(token);

        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
    }

    useEffect(() => {
        const userToken: string | null = localStorage.getItem('token');
        const userLocalStorage: string | null = localStorage.getItem('user');

        // if (!userTkn) return router.push('/login') 
        setToken(userToken);
        setUser(JSON.parse(userLocalStorage as string));
        setIsLoading(false);
    }, [router]);

    return (

        isLoading ? <Loader /> :
            <>
                <Navbar token={token} />
                <main className='d-flex overflow-hidden' style={{ maxHeight: '90vh' }}>
                    <Sidebar token={token} user={user} logout={handleLogout} />
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
