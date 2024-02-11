'use client'
import React, { useState, ChangeEvent } from 'react';
import { Caveat } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';

const caveat = Caveat({ subsets: ["latin"] });

const Registrer: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

    const registrerNewUser = (): void => {
        console.log("hola");
    }

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value);
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setName(event.target.value);
    };

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const newPassword: string = event.target.value;

        // Validar la contraseña con expresiones regulares
        setIsPasswordValid(/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(newPassword))
        setPassword(event.target.value);
    };

    const areAllFieldsFilled = (): boolean => {
        return email !== "" && name !== "" && username !== "" && password !== "";
    };

    return (
        <main className='w-100 d-flex justify-content-center flex-column align-items-center min-vh-100'>
            <form className='card p-3 mb-3' style={{ width: 350 }} onSubmit={registrerNewUser}>
                <h1 className={`${caveat.className} display-4 mb-4 text-center`}>Adogtame</h1>

                <h2 className='h5 text-secondary text-center mb-3'>
                    Regístrate en Adogtame y descubre a tu mejor amigo peludo. ¡Adopta con amor!</h2>

                <hr className='mb-4' />

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" value={email} onChange={handleEmailChange} id="InputUserRegistrer" placeholder="Correo electronico" required />
                    <label>Correo electronico</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" value={name} onChange={handleNameChange} id="InputNameRegistrer" placeholder="Nombre completo" required />
                    <label>Nombre completo</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" value={username} onChange={handleUsernameChange} id="InputUserNameRegistrer" placeholder="Nombre de usuario" required />
                    <label>Nombre de usuario</label>
                </div>

                <div className="form-floating mb-4">
                    <input type="password" className={`form-control ${isPasswordValid ? '' : 'is-invalid'}`} value={password} onChange={handlePasswordChange} id="InputPasswordRegistrer" placeholder="Contraseña" aria-describedby="messageError" required />
                    <label>Contraseña</label>
                    <div id="messageError" className="invalid-feedback mt-3">
                        La contraseña debe tener al menos una mayúscula, un número y ser de al menos 8 caracteres.
                    </div>
                </div>

                <div className="mb-4">
                    <button type="submit" className='btn w-100' disabled={!areAllFieldsFilled()}>Registrarte</button>
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
