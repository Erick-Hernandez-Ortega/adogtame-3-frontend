'use client';
import React, { FC } from 'react';
import { IconCompass, IconHome, IconMessages, IconSearch, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import "./styles.css";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Sidebar: FC = () => {
    const pathname: string = usePathname();

    // TODO cambiar las etiquetas a link
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: '280px' }}>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''} d-flex align-items-center gap-1`} aria-current="page">
                        <IconHome color="#000" />
                        Inicio
                    </Link>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center gap-1">
                        <IconSearch />
                        Buscar
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center gap-1">
                        <IconCompass />
                        Explorar
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex align-items-center gap-1">
                        <IconMessages />
                        Mensajes
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">
                        <IconUser />
                        Perfil
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <Image src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>elpepe32</strong>
                </a>
                <ul className="dropdown-menu text-small shadow">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>

    );
}

