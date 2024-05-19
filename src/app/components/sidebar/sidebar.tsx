'use client';
import React, { FC } from 'react';
import { IconCompass, IconHome, IconLogout, IconMessages, IconSearch, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import "./styles.css";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useStore } from '@/store/store';

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = () => {
    const { token, userLogOut, user } = useStore()
    const pathname: string = usePathname();

    const logout = async (): Promise<void> => {
        const response = await userLogOut(token);
    }

    return (
        <aside className="d-flex flex-column flex-shrink-0 p-3" style={{ width: '280px' }}>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''} d-flex align-items-center gap-1`} aria-current="page">
                        <IconHome color="#000" />
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link href="#" className="nav-link link-body-emphasis d-flex align-items-center gap-1">
                        <IconSearch />
                        Buscar
                    </Link>
                </li>
                <li>
                    <Link href="#" className="nav-link link-body-emphasis d-flex align-items-center gap-1">
                        <IconCompass />
                        Explorar
                    </Link>
                </li>
                {token !== '' && (
                    <>

                        <li>
                            <Link href="#" className="nav-link link-body-emphasis d-flex align-items-center gap-1">
                                <IconMessages />
                                Mensajes
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="nav-link link-body-emphasis">
                                <IconUser />
                                Perfil
                            </Link>
                        </li>
                    </>
                )}
            </ul>
            {token !== null && token !== '' && (
                <>
                    <hr />
                    <div className="d-flex align-items-center justify-content-between ">
                        <div>
                            <Image src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                            <strong>{user?.name}</strong>
                        </div>
                        <IconLogout style={{ cursor: 'pointer' }} onClick={logout} />
                    </div>
                </>
            )}
        </aside>

    );
}

