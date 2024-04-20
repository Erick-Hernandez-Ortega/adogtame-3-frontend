import React from 'react';
import { Caveat } from "next/font/google";
import Image from 'next/image';
import { LineStyle, BoxStyle } from '@/types/login';

const caveat = Caveat({ subsets: ["latin"] });

// TODO hacer funcional el login ademas de hacerlo responsivo
const Login: React.FC = () => {
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

    return (
        <main className='d-flex justify-content-center align-items-center  min-vh-100 p-2'>
            <div className="card h-75 d-flex flex-row" style={boxStyle}>
                <Image src="/img/login/background.jpeg" className='d-none d-lg-block' alt="Adogtame Logo" width={529} height={714} />
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
                            <input type="email" className="form-control" id="floatingInput" placeholder="Correo electronico" />
                            <label>Correo electronico</label>
                        </div>
                        <div className="form-floating" style={{ width: '90%' }}>
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" />
                            <label>Contraseña</label>
                        </div>
                        <div className="mt-3" style={{ width: '90%' }}>
                            <button type="button" style={{ width: '100%' }} className='btn btn-primary'>Iniciar sesion</button>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center '>
                        <div className='d-flex justify-content-center border-top p-3 flex-column align-items-center' style={{ width: 270 }}>
                            <p className='mb-0'>¿No tienes una cuenta?</p>
                            <a href="" className='text-decoration-none'>Registrate</a>
                        </div>

                    </div>
                </section>
            </div>
        </main>
    );
}

export default Login;
