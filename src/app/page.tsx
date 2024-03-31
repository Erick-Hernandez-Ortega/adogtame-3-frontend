'use client'
import React, { useState, useEffect } from 'react';
import { Caveat } from "next/font/google";
import { useRouter } from 'next/navigation';
import { userLogout } from '@/utils/userAPI';
import { AxiosError, AxiosResponse } from 'axios';
import Sidebar from './components/Sidebar/sidebar';
import PublicationCard from './components/PublicationCard/publicationCard';

const caveat = Caveat({ subsets: ["latin"] });

const Home: React.FC = () => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>("");
    let isLogged: boolean = false;

    const handleLogout = async (): Promise<void> => {
        const response: AxiosResponse | AxiosError = await userLogout(token);
        console.log(response);
        localStorage.removeItem('token');
        router.push('/login');
    }

    useEffect(() => {
        const userTkn: string | null = localStorage.getItem('token');
        if (!userTkn) {
            router.push('/login')
        } else {
            setToken(userTkn);
            isLogged = true;
        }
        
    }, []);

    return (
        <main className='d-flex flex-fill min-vh-100' style={{maxHeight: '100vh'}}>
            <Sidebar logout={handleLogout} isLogged={isLogged} />
            <div className='overflow-scroll d-flex flex-column h-auto w-100 align-items-center gap-3 p-3'>
              <PublicationCard isLogged={isLogged} />
              <PublicationCard isLogged={isLogged} />
            </div>
            {/* <h1>Home component</h1>
            <button onClick={handleLogout}>Cerrar sesion</button> */}
        </main>
    );
}

export default Home;
