"use client"
import { useStore } from "@/store/store";
import { IconHome, IconPaw, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LogoutButton } from "../LogoutButton/LogoutButton";

export const SidebarOption = () => {
    const { token, user } = useStore()
    const pathname: string = usePathname();

    return (
        <>
            <ul className="nav nav-pills flex-column mb-auto gap-2">
                <li className="nav-item">
                    <Link href="/" className={`nav-link ${pathname === '/' || pathname.startsWith('/mascota/') ? 'active' : ''} d-flex align-items-center gap-1 rounded-4 link-body-emphasis`}>
                        <IconHome color="#000" />
                        Inicio
                    </Link>
                </li>
                {token !== '' && (
                    <>
                        <li className="nav-item">
                            <Link href="/publicaciones" className={`nav-link ${pathname === '/publicaciones' ? 'active' : ''} link-body-emphasis rounded-4 d-flex align-items-center gap-1`}>
                                <IconPaw />
                                Mis publicaciones
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/perfil" className={`nav-link ${pathname === '/perfil' ? 'active' : ''} link-body-emphasis rounded-4 d-flex align-items-center gap-1`}>
                                <IconUser />
                                Perfil
                            </Link>
                        </li>
                    </>
                )}
            </ul>
            {
                token !== null && token !== '' && (
                    <>
                        <hr />
                        <div className="d-flex align-items-center justify-content-between ">
                            <div>
                                <Image src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                                <strong>{user?.name}</strong>
                            </div>
                            <LogoutButton />
                        </div>
                    </>
                )
            }
        </>
    )
}