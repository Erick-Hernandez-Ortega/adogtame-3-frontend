import React, { FC } from 'react';
import { Caveat } from "next/font/google";
import { IconLogin, IconPlus } from '@tabler/icons-react';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import { Button } from '@mantine/core';
import { ModalPet } from '../modal-pet/modal-pet';
import { useStore } from '@/store/store';

const caveat = Caveat({ subsets: ["latin"] });

export const Navbar: FC = () => {
    const { token } = useStore()
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <header className="py-3 border-bottom m-2 mb-0 rounded-4" style={{ backgroundColor: '#B3A5D4' }}>
                <nav className="container-fluid d-grid gap-3 align-items-center" style={{ gridTemplateColumns: '1fr 2fr' }}>
                    <div className={`${caveat.className} display-6`}>
                        Adogtame
                    </div>

                    <div className="d-flex align-items-center">
                        <form className="w-100 me-3 input-group " role="search">
                            <input type="search" className="form-control rounded-4 " placeholder="Buscar..." aria-label="Search"></input>
                        </form>

                        <div className="flex-shrink-0 d-flex gap-2">
                            {token !== '' && (
                                <Button onClick={open} className='btn btn-primary border-0 d-flex align-items-center gap-1 rounded-4' style={{ backgroundColor: '#A87FEB' }}>
                                    <IconPlus />
                                    Publicar
                                </Button>
                            )}
                            {token === '' && (
                                <Link href={"/login"} className='btn btn-primary border-0 d-flex align-items-center gap-1 rounded-4' style={{ backgroundColor: '#A87FEB' }}>
                                    <IconLogin /> Iniciar sesión
                                </Link>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
            <ModalPet opened={opened} close={close} />
        </>
    );
}

