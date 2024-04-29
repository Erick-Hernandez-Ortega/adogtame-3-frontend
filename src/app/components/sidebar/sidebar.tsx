'use client';
import React, { FC } from 'react';
import { IconCompass, IconHome, IconMessages, IconSearch, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import "./styles.css";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Sidebar: FC = () => {
    const pathname: string = usePathname();

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
            </ul>
            <hr />
            <div className="dropdown">
                <Link href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <Image src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>elpepe32</strong>
                </Link>
                <ul className="dropdown-menu text-small shadow">
                    <li><Link className="dropdown-item" href="#">New project...</Link></li>
                    <li><Link className="dropdown-item" href="#">Settings</Link></li>
                    <li><Link className="dropdown-item" href="#">Profile</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" href="#">Sign out</Link></li>
                </ul>
            </div>
        </div>

    );
}

