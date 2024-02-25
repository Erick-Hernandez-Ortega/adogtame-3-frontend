'use client'
import React, { useState, useEffect } from 'react';
import { Caveat } from "next/font/google";
import { useRouter } from 'next/navigation';
import { userLogout } from '@/utils/userAPI';

const caveat = Caveat({ subsets: ["latin"] });

const Home: React.FC = () => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>("");

    const handleLogout = async () => {
        const response = await userLogout(token);
        console.log(response);
        localStorage.removeItem('token');
        router.push('/');
    }

    useEffect(() => {
        const userTkn = localStorage.getItem('token');
        if (!userTkn) {
            router.push('/')
        }
        setToken(userTkn);
    }, []);

    return (
        <main className='w-100 d-flex justify-content-center flex-column align-items-center min-vh-100 py-3'>
            <h1>Home component</h1>
            <button onClick={handleLogout}>Cerrar sesion</button>
        </main>
    );
}

export default Home;
