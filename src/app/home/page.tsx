'use client'
import React, { useState } from 'react';
import { Caveat } from "next/font/google";
import axios, { AxiosResponse, AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

const caveat = Caveat({ subsets: ["latin"] });

const Home: React.FC = () => {
    const router = useRouter();
    const [token, setToken] = useState<string>("");

    return (
        <main className='w-100 d-flex justify-content-center flex-column align-items-center min-vh-100 py-3'>
            <h1>Home component</h1>
        </main>
    );
}

export default Home;
