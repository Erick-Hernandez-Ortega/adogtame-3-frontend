import React from 'react';
import { Caveat } from "next/font/google";
import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';

const caveat = Caveat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Adogtame - Registro de usuario",
};

const Registrer: React.FC = () => {
    return (
        <main className='w-100 d-flex justify-content-center flex-column align-items-center min-vh-100'>
            <form className='card p-3 mb-3' style={{ width: 350 }}>
                <h1 className={`${caveat.className} display-4 mb-4 text-center`}>Adogtame</h1>

                <h2 className='h5 text-secondary text-center mb-3'>
                    Regístrate en Adogtame y descubre a tu mejor amigo peludo. ¡Adopta con amor!</h2>

                <hr className='mb-4' />

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="InputUserRegistrer" placeholder="Correo electronico" />
                    <label>Correo electronico</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="InputNameRegistrer" placeholder="Nombre completo" />
                    <label>Nombre completo</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="InputUserNameRegistrer" placeholder="Nombre de usuario" />
                    <label>Nombre de usuario</label>
                </div>

                <div className="form-floating mb-4">
                    <input type="password" className="form-control" id="InputPasswordRegistrer" placeholder="Contraseña" />
                    <label>Contraseña</label>
                </div>

                <div className="mb-4">
                    <button type="submit" className='btn w-100' disabled>Registrarte</button>
                </div>
            </form>

            <div className="card text-center p-2 py-3 d-flex mb-3" style={{ width: 350 }}>
                <p className='m-0'>¿Tienes una cuenta?  <Link href="/" className='text-decoration-none'>Iniciar sesión</Link></p>
            </div>

            <div className="text-center" style={{ width: 350 }}>
                <p className='mb-2'>Descarga la app</p>
                <div className="d-flex align-items-center justify-content-center">
                    <Image src="/img/appstore.png" width={170} height={70} alt='' />
                    <Image src="/img/google.png" width={170} height={55} alt='' />
                </div>
            </div>
        </main>
    )
}

export default Registrer
