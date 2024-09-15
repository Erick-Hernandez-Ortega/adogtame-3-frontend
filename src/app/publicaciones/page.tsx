'use client'
import { useEffect, useState } from "react"
import { Navbar } from "../components/navbar/navbar"
import { Sidebar } from "../components/sidebar/sidebar"
import { useStore } from '@/store/store';
import { PetCard } from "../components/pet-card/pet-card";

const PublicationsView = () => {
    const { getPetsByUser, user } = useStore()
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const getPets = async () => {
            if (user) {
                const userPets = await getPetsByUser(user?._id)

                setPets(userPets)
            }
        }

        getPets()
    }, [user, getPetsByUser]);

    return (
        <>
            <Navbar />
            <main className="d-flex" style={{ maxWidth: '99vw' }}>
                <Sidebar />
                <section className="p-3">
                    <h4>Mis mascotas publicadas</h4>
                    <div className='d-flex flex-wrap gap-2'>
                        {pets && pets.length > 0 ?
                                pets.map((pet, index) => <PetCard key={index} pet={pet} />) 
                                :
                                <p>No hay publicaciones</p>
                            }
                    </div>
                </section>
            </main>
        </>
    )
}

export default PublicationsView