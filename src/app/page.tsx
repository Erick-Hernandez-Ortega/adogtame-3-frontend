'use client'
import React, { useState, useEffect, FC } from 'react';
import { Caveat } from "next/font/google";
import { useRouter } from 'next/navigation';
import { userLogout } from '@/utils/userAPI';
import { AxiosError, AxiosResponse } from 'axios';
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';
import { FiltrerMenu } from './components/filtrer-menu/filtrer-menu';
import { PetCard } from './components/pet-card/pet-card';

const caveat = Caveat({ subsets: ["latin"] });

const Home: FC = () => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleLogout = async (): Promise<void> => {
        const response: AxiosResponse | AxiosError = await userLogout(token);
        console.log(response);
        localStorage.removeItem('token');
        router.push('/login');
    }

    useEffect(() => {
        const userTkn: string | null = localStorage.getItem('token');

        // if (!userTkn) return router.push('/login') 
        setToken(userTkn);
        setIsLoading(false);
    }, [router]);

    return (

        isLoading ? <div>Loading...</div> :
            <>
                <Navbar token={token} />
                <main className='d-flex overflow-hidden' style={{ maxHeight: '90vh' }}>
                    <Sidebar token={token} />
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
