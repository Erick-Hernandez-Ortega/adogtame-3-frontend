'use client'
import { Loader } from '@/app/components/loader/loader';
import { Navbar } from '@/app/components/navbar/navbar';
import React, { useEffect, useState } from 'react';

const Pet: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // setIsLoading(false);
    }, []);

    return (
        <>
            <Navbar />
            {isLoading ? <Loader />
                :
                <main>
                    <p>soy mascota</p>
                </main>

            }
        </>
    );
}

export default Pet;
