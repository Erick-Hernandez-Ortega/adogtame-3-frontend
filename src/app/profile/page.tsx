'use client'
import { useEffect, useState } from "react";
import { Navbar } from "../components/navbar/navbar"
import { Sidebar } from "../components/sidebar/sidebar"
import { User } from "@/types/user";
import Image from "next/image";
import { ProfileForm } from "../components/user-profile-form/user-profile-form";

const ProfileView = () => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            const parsedUserInfo = JSON.parse(userInfo);
            setUser(parsedUserInfo.state.user);
        }
    }, []);

    if (!user) {
        return <p>Cargando datos...</p>
    }
    else {
        return (
            <>
                <Navbar />
                <section className="d-flex" style={{ maxWidth: '99vw' }}>
                    <Sidebar />
                    <div className="d-flex flex-grow-1 mt-2 justify-content-center align-items-start rounded bg-danger">
                        {/* Contenedor de Información del usuario */}
                        <div className="p-2 d-flex flex-column align-items-center justify-content-center" style={{ width: '50%' }}>
                            <div className="rounded-circle overflow-hidden border mb-4" style={{ width: '150px', height: '150px' }}>
                                <Image
                                    src={`/${user.imagen}`}
                                    alt="Profile Image"
                                    width={150}
                                    height={150}
                                    className="img-fluid"
                                />
                            </div>
                            <p>{user.name}</p>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                        </div>

                        {/* Contenedor de Formulario */}
                        <div className="p-2 d-flex flex-column justify-content-center align-items-center" style={{ width: '50%' }}>
                            <ProfileForm
                                user={user}
                            />
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default ProfileView;
