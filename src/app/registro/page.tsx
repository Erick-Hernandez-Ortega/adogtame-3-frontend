import React, { useState } from 'react';
import Image from 'next/image';
import { BoxStyleRegistro } from '@/types/registro';

// TODO falta hacer la responsiva y funcional
const Register: React.FC = () => {
    const boxStyle: BoxStyleRegistro = {
        boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
        minHeight: '90vh',
    };

    return (
        <main className='d-flex justify-content-center align-items-center min-vh-100 p-2'>
            <div className="card d-flex p-3 w-75 justify-content-center overflow-hidden" style={boxStyle}>
                <h1 className='text-center'>¡ BIENVENIDO A ADOGTAME !</h1>
                <h4 className='text-center'>Tu mejor amigo te espera</h4>

                <div className="d-flex flex-row justify-content-evenly align-items-center">
                    <Image src={"/icons/registro/emojione-dog.svg"} width={150} height={150} alt='icon dog' />
                    <div className='p-3 d-flex flex-column align-items-center' style={{ width: '800px' }}>
                        <div className="form-floating mb-3 w-75 z-1">
                            <input type="text" className={`form-control`} id="floatingInputName" placeholder="Nombre completo" />
                            <label>Nombre completo</label>
                            <div id="validationName" className="invalid-feedback">
                                Por favor introduzca un nombre sin caracteres especiales.
                            </div>
                        </div>
                        <div className="form-floating mb-3 w-75 z-1">
                            <input type="email" className={`form-control`} id="floatingInputEmail" placeholder="Correo electronico" />
                            <label>Correo electronico</label>
                            <div id="validationEmail" className="invalid-feedback">
                                Por favor introduzca un correo valido.
                            </div>
                        </div>
                        <div className="form-floating mb-4 w-75 z-1">
                            <input type="password" className={`form-control`} id="floatingInputPassword" placeholder="Contraseña" />
                            <label>Contraseña</label>
                            <div id="validationPassword" className="invalid-feedback">
                                Por favor introduzca un correo valido.
                            </div>
                        </div>

                        <div className="mb-3 w-75 z-1">
                            <button type="button" className='btn btn-primary w-100 '>Registrarse</button>
                        </div>
                    </div>
                    <Image src={"/icons/registro/emoji-cat.svg"} width={150} height={150} alt='icon cat' />
                </div>

                <div className='d-flex justify-content-center z-1'>
                    <div className='d-flex justify-content-center border-top p-3 flex-column align-items-center' style={{ width: 270 }}>
                        <p className='mb-0'>¿Ya tienes una cuenta?</p>
                        <a href="" className='text-decoration-none'>Inicia Sesión</a>
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
