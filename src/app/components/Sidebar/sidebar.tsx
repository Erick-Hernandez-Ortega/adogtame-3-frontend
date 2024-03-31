import React, { MouseEventHandler, useState, useEffect } from 'react'
import { Caveat } from "next/font/google";
import Link from 'next/link';
import "./styles.css";
import { usePathname } from 'next/navigation'
import PageProps from '@/types/sidebarTypes';
import Image from 'next/image';
import { IconHomeFilled, IconHome, IconSearch, IconCompass, IconPaw, IconBone, IconBadge, IconMessage, IconLibraryPlus, IconLogout2, IconUserCircle } from '@tabler/icons-react';

const caveat = Caveat({ subsets: ["latin"] });

const Sidebar: React.FC<PageProps> = ({ logout, isLogged }) => {
    const [token, setToken] = useState<string | null>("");
    const pathname: string | null = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (): MouseEventHandler<HTMLAnchorElement> | undefined => {
        setIsMenuOpen(!isMenuOpen);
        return undefined;
    };

    const handleLogout = (): void => {
        logout();
    }

    useEffect(() => {
        const userTkn: string | null = localStorage.getItem('token');
        if (!userTkn) {
            setToken("");
        } else {
            setToken(userTkn);
            isLogged = true;
        }

    }, []);

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary d-none d-md-flex" style={{ width: '280px' }}>
            <Link href="/" className="d-flex mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className={`${caveat.className}`} id="adogtameTitle">Adogtame</span>
            </Link>

            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className={`nav-link ${pathname === "/" ? "active" : ""} d-flex gap-2`} aria-current="page">
                        {pathname === "/" ? <IconHomeFilled /> : <IconHome />}
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex gap-2">
                        <IconSearch />
                        Buscar
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis d-flex gap-2">
                        <IconCompass />
                        Explorar
                    </a>
                </li>

                {token !== "" ?
                    <>
                        <li>
                            <a href="#" className="nav-link link-body-emphasis d-flex gap-2">
                                {/* cambiar a icono llenado cuando este en la ruta */}
                                <IconPaw />
                                Mis mascotas
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-body-emphasis d-flex gap-2">
                                {/* cambiar a icono llenado cuando este en la ruta */}
                                <IconBone />
                                Mis adopciones
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-body-emphasis d-flex gap-2">
                                {/* cambiar a icono llenado cuando este en la ruta */}
                                <IconLibraryPlus />
                                Crear
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-body-emphasis d-flex gap-2">
                                {/* cambiar a icono llenado cuando este en la ruta */}
                                <IconBadge />
                                Guardados
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-body-emphasis d-flex gap-2">
                                {/* cambiar a icono llenado cuando este en la ruta */}
                                <IconMessage />
                                Mensajes
                            </a>
                        </li>
                    </>
                    : null
                }

            </ul>
            {
                token !== "" ?
                    <>
                        <hr />
                        <div className="dropdown">
                            <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" onClick={toggleMenu} data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                                <strong>mdo</strong>
                            </a>
                            <ul className={`dropdown-menu text-small shadow ${isMenuOpen ? 'show' : ''}`}>
                                <li><a className="dropdown-item d-flex gap-1" href="#"><IconUserCircle /> Perfil</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item d-flex gap-1" href="#" onClick={handleLogout}><IconLogout2 size={23} /> Cerrar sesión</a></li>
                            </ul>
                        </div>
                    </>
                    : null
            }
        </div>

    )
}

export default Sidebar;
