import React, { useState } from 'react';
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

const Register: React.FC = () => {
    return (
        <main className='d-flex justify-content-center align-items-center  min-vh-100 p-2'>
            <p>hola registro</p>
        </main>
    );
}

export default Register;
