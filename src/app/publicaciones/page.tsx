'use client'
import { Navbar } from "../components/navbar/navbar"
import { Sidebar } from "../components/sidebar/sidebar"

const PublicationsView = () => {

    return (
        <>
            <Navbar />
            <section className="d-flex" style={{ maxWidth: '99vw' }}>
                <Sidebar />
                <p>deddede</p>
            </section>
        </>
    )
}

export default PublicationsView