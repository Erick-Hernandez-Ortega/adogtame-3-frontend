'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { BoxStyleRegistro, FormRegisterState } from '@/types/registro';
import { createNewUser } from '@/utils/userAPI';
import Swal from 'sweetalert2';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { emailRegex, nameRegex, passwordRegex, usernameRegex } from '@/utils/validations';

const Register: React.FC = () => {
    const router = useRouter();
    const boxStyle: BoxStyleRegistro = {
        boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
        minHeight: '90vh',
    };
    const [formRegister, setFormRegister] = useState<FormRegisterState>({
        name: '',
        nameClass: '',
        username: '',
        usernameClass: '',
        email: '',
        emailClass: '',
        password: '',
        passwordClass: '',
    });

    const validateEmail = (email: string): void => {
        if (emailRegex.test(email)) {
            // Email válido
            setFormRegister({ ...formRegister, email: email, emailClass: 'is-valid' });
        } else {
            // Email inválido
            setFormRegister({ ...formRegister, email: email, emailClass: 'is-invalid' });
        }
    }

    const validatePassword = (password: string): void => {
        if (passwordRegex.test(password)) {
            // Password válida
            setFormRegister({ ...formRegister, password: password, passwordClass: 'is-valid' });
        } else {
            // Password inválida
            setFormRegister({ ...formRegister, password: password, passwordClass: 'is-invalid' });
        }
    }

    const validateName = (name: string): void => {
        if (nameRegex.test(name)) {
            // Nombre válido
            setFormRegister({ ...formRegister, name: name, nameClass: 'is-valid' });
        } else {
            // Nombre inválido
            setFormRegister({ ...formRegister, name: name, nameClass: 'is-invalid' });
        }
    }

    const validateUsername = (username: string): void => {
        if (usernameRegex.test(username)) {
            // Username válida
            setFormRegister({ ...formRegister, username: username, usernameClass: 'is-valid' });
        } else {
            // Username inválida
            setFormRegister({ ...formRegister, username: username, usernameClass: 'is-invalid' });
        }
    }


    const isRegistrerFormValid = (): boolean => {
        return formRegister.emailClass === 'is-valid' && formRegister.passwordClass === 'is-valid' && formRegister.nameClass === 'is-valid';
    }

    const showMessageRegistrerSuccess = (text: string): void => {
        Swal.fire({
            icon: "success",
            title: "Cuenta creada!",
            text: text,
        }).then(() => {
            router.push('/');
        })
    }

    const showMessageRegisterError = (text: string): void => {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: text,
        })
    }

    const handleRegister = async (): Promise<void> => {
        try {
            const response: any = await createNewUser({ name: formRegister.name, email: formRegister.email, password: formRegister.password, username: formRegister.username, age: "0" });
            showMessageRegistrerSuccess(response.data.message);
        } catch (error: AxiosError | any) {
            showMessageRegisterError(error.response.data.message);
        }
    }

    return (
        <main className='d-flex justify-content-center align-items-center min-vh-100 p-3' style={{ backgroundColor: '#b3a5d4' }}>
            <div className="card d-flex p-3 justify-content-center overflow-hidden" style={boxStyle}>
                <h1 className='text-center'>¡ BIENVENIDO A ADOGTAME !</h1>
                <h4 className='text-center'>Tu mejor amigo te espera</h4>

                <div className="d-flex flex-row justify-content-evenly align-items-center">
                    <Image className='d-none d-lg-block z-1' src={"/icons/registro/emojione-dog.svg"} width={150} height={150} alt='icon dog' />
                    <div className='p-3 d-flex flex-column align-items-center' style={{ width: '800px' }}>
                        <div className="form-floating mb-3 w-75 z-1">
                            <input type="text" className={`form-control ${formRegister.nameClass}`} value={formRegister.name} onChange={(e) => validateName(e.target.value)} id="floatingInputName" placeholder="Nombre completo" />
                            <label>Nombre completo</label>
                            <div id="validationName" className="invalid-feedback">
                                Por favor introduzca un nombre sin caracteres especiales.
                            </div>
                        </div>
                        <div className="form-floating mb-3 w-75 z-1">
                            <input type="text" className={`form-control ${formRegister.usernameClass}`} value={formRegister.username} onChange={(e) => validateUsername(e.target.value)} id="floatingInputUsername" placeholder="Nombre de usuario" />
                            <label>Nombre de usuario</label>
                            <div id="validationUserName" className="invalid-feedback">
                                Por favor introduzca un nombre de usuario valido.
                            </div>
                        </div>
                        <div className="form-floating mb-3 w-75 z-1">
                            <input type="email" className={`form-control ${formRegister.emailClass}`} value={formRegister.email} onChange={(e) => validateEmail(e.target.value)} id="floatingInputEmail" placeholder="Correo electronico" />
                            <label>Correo electronico</label>
                            <div id="validationEmail" className="invalid-feedback">
                                Por favor introduzca un correo valido.
                            </div>
                        </div>
                        <div className="form-floating mb-4 w-75 z-1">
                            <input type="password" className={`form-control ${formRegister.passwordClass}`} value={formRegister.password} onChange={(e) => validatePassword(e.target.value)} id="floatingInputPassword" placeholder="Contraseña" />
                            <label>Contraseña</label>
                            <div id="validationPassword" className="invalid-feedback">
                                Por favor introduzca una contraseña valida.
                            </div>
                        </div>

                        <div className="mb-3 w-75 z-1">
                            <button type="button" className='btn btn-primary w-100 ' disabled={!isRegistrerFormValid()} onClick={handleRegister}>Registrarse</button>
                        </div>
                    </div>
                    <Image className='d-none d-lg-block z-1' src={"/icons/registro/emoji-cat.svg"} width={150} height={150} alt='icon cat' />
                </div>

                <div className='d-flex justify-content-center z-1'>
                    <div className='d-flex justify-content-center border-top p-3 flex-column align-items-center' style={{ width: 270 }}>
                        <p className='mb-0'>¿Ya tienes una cuenta?</p>
                        <Link href="/login" className='text-decoration-none'>Inicia Sesión</Link>
                    </div>
                </div>

                <Image src={"/img/registro/background.svg"} width={700} height={700} alt='circle' style={{
                    position: 'absolute',
                    bottom: -330,
                    left: 0
                }} />
            </div>
        </main>
    );
}

export default Register;
