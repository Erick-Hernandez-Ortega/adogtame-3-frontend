'use client'
import { useEffect, useState } from "react";
import { Navbar } from "../components/navbar/navbar"
import { Sidebar } from "../components/sidebar/sidebar"
import { User } from "@/types/user";

const ProfileView = () => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            const parsedUserInfo = JSON.parse(userInfo);
            setUser(parsedUserInfo.state.user);
        }
    }, []);

    return (
        <>
            <Navbar />
            <section className="d-flex" style={{ maxWidth: '99vw' }}>
                <Sidebar />
                <div className="bg-danger d-flex flex-grow-1 mt-2 rounded justify-content-center">
                    <img src={user?.imagen} alt="Profle Img" />
                    <p>
                        {user?.name}
                    </p>
                    <p>
                        {user?.username}
                    </p>
                    <p>
                        {user?.email}
                    </p>
                    <p>
                        {user?.age}
                    </p>
                </div>
            </section>
        </>
    )
}

export default ProfileView