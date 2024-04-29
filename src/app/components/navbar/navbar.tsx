import React, { FC } from 'react';
import { Caveat } from "next/font/google";
import { IconLogin, IconPlus } from '@tabler/icons-react';
import Link from 'next/link';

const caveat = Caveat({ subsets: ["latin"] });

export const Navbar: FC = () => {

    return (
        <header className="py-3 border-bottom" style={{ backgroundColor: '#e1dafa' }}>
            <nav className="container-fluid d-grid gap-3 align-items-center" style={{ gridTemplateColumns: '1fr 2fr' }}>
                <div className={`${caveat.className} display-6`} style={{ color: '#35185d' }}>
                    Adogtame
                </div>

                <div className="d-flex align-items-center">
                    <form className="w-100 me-3 input-group " role="search">
                        <input type="search" className="form-control rounded-4 " placeholder="Buscar..." aria-label="Search"></input>
                    </form>

                    <div className="flex-shrink-0 d-flex gap-2">
                        <button className='btn btn-primary border-0 d-flex align-items-center gap-1 ' type="button" style={{ backgroundColor: '#a87feb' }}>
                            <IconPlus /> Publicar
                        </button>
                        <Link href={"/login"} className='btn btn-primary border-0 d-flex align-items-center gap-1' style={{ backgroundColor: '#474545' }}>
                            <IconLogin /> Iniciar sesión
                        </Link>
                    </div>
                </div>
            </nav>
        </header>

    );
}

