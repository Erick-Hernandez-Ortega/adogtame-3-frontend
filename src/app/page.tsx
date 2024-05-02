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
    // const router = useRouter();
    // const [token, setToken] = useState<string | null>("");
    // let isLogged: boolean = false;

    // const handleLogout = async (): Promise<void> => {
    //     const response: AxiosResponse | AxiosError = await userLogout(token);
    //     console.log(response);
    //     localStorage.removeItem('token');
    //     router.push('/login');
    // }

    // useEffect(() => {
    //     const userTkn: string | null = localStorage.getItem('token');
    //     if (!userTkn) {
    //         router.push('/')
    //     } else {
    //         setToken(userTkn);
    //         isLogged = true;
    //     }

    // }, []);

    return (
        <>
            <Navbar />
            <main className='d-flex flex-fill' style={{ maxHeight: '100vh' }}>
                <Sidebar />
                <article className='d-flex flex-column w-100 '>
                    <FiltrerMenu />
                    <PetCard />
                </article>
                {/* <h1>Home component</h1>
            <button onClick={handleLogout}>Cerrar sesion</button> */}
            </main>
        </>
    );
}

export default Home;
