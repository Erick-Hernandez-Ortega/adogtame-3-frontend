'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { LineStyle, BoxStyle } from '@/types/login';
import { userLogin } from '@/utils/userAPI';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { emailRegex, passwordRegex } from '@/utils/validations';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
    const router = useRouter();
    const lineStyle: LineStyle = {
        margin: '0px 20px',
        width: '150px',
        borderTop: '1px solid #939393',
        position: 'relative',
        top: '10px',
        float: 'left'
    };
    const boxStyle: BoxStyle = {
        boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px'
    };
    // ? Esto es una mejora de optimizacion me enseñaron en la chamba 
    const [formLogin, setFormLogin] = useState({
        email: '',
        emailClass: '',
        password: '',
        passwordClass: '',
    });

    const handleLogin = async (): Promise<void> => {
        const response: any = await userLogin({ email: formLogin.email, password: formLogin.password });

        if (response.error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: response.message,
            });
        } else {
            localStorage.setItem('token', response.token);
            router.push('/');
        }
    }

    const validateEmail = (email: string): void => {
        if (emailRegex.test(email)) {
            // Email válido
            setFormLogin({ ...formLogin, email: email, emailClass: 'is-valid' });
        } else {
            // Email inválido
            setFormLogin({ ...formLogin, email: email, emailClass: 'is-invalid' });
        }
    }

    const validatePassword = (password: string): void => {
        if (passwordRegex.test(password)) {
            // Password válida
            setFormLogin({ ...formLogin, password: password, passwordClass: 'is-valid' });
        } else {
            // Password inválida
            setFormLogin({ ...formLogin, password: password, passwordClass: 'is-invalid' });
        }
    }

    const isLoginFormValid = (): boolean => {
        return formLogin.emailClass === 'is-valid' && formLogin.passwordClass === 'is-valid';
    }

    return (
        <main className='d-flex justify-content-center align-items-center  min-vh-100 p-2'>
            <div className="card h-75 d-flex flex-row" style={boxStyle}>
                <Image src="/img/login/background.jpeg" priority className='d-none d-lg-block' alt="Adogtame Logo" width={529} height={714} />
                <section className='w-100 p-4'>
                    <div className='d-flex justify-content-center mt-5 mb-3 '>
                        <button type="button" style={{ width: '90%', border: '1px solid #000000' }} className='btn btn-light d-flex align-items-center justify-content-center gap-2 p-2'>
                            <Image src="/img/login/icon-google.png" alt="Google Logo" width={25} height={25} />
                            Iniciar sesion
                        </button>
                    </div>

                    <div className='d-flex w-100 justify-content-center '>
                        <div style={lineStyle}></div>
                        <p>O</p>
                        <div style={lineStyle}></div>
                    </div>

                    <div className='d-flex flex-column align-items-center gap-2 mb-5'>
                        <div className="form-floating mb-3" style={{ width: '90%' }}>
                            <input type="email" className={`form-control ${formLogin.emailClass}`} id="floatingInput" value={formLogin.email} onChange={(e) => validateEmail(e.target.value)} placeholder="Correo electronico" />
                            <label>Correo electronico</label>
                            <div id="validationEmail" className="invalid-feedback">
                                Por favor introduzca un correo valido.
                            </div>
                        </div>
                        <div className="form-floating" style={{ width: '90%' }}>
                            <input type="password" className={`form-control ${formLogin.passwordClass}`} value={formLogin.password} onChange={(e) => validatePassword(e.target.value)} id="floatingPassword" placeholder="Contraseña" />
                            <label>Contraseña</label>
                            <div id="validationPassword" className="invalid-feedback">
                                Por favor introduzca una contraseña valida.
                            </div>
                        </div>
                        <div className="mt-3" style={{ width: '90%' }}>
                            <button type="button" style={{ width: '100%' }} className='btn btn-primary' onClick={handleLogin} disabled={!isLoginFormValid()}>Iniciar sesion</button>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center '>
                        <div className='d-flex justify-content-center border-top p-3 flex-column align-items-center' style={{ width: 270 }}>
                            <p className='mb-0'>¿No tienes una cuenta?</p>
                            <Link href="/registro" className='text-decoration-none'>Registrate</Link>
                        </div>

                    </div>
                </section>
            </div>
        </main>
    );
}

export default Login;
