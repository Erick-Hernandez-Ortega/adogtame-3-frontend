import React, { FC } from 'react';
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

export const Navbar: FC = () => {

    return (
        <header className="py-3 mb-3 border-bottom bg-danger">
            <div className="container-fluid d-grid gap-3 align-items-center" style={{ gridTemplateColumns: '1fr 2fr' }}>
                <div className=''>
                    
                </div>

                <div className="d-flex align-items-center">
                    <form className="w-100 me-3" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"></input>
                    </form>

                    <div className="flex-shrink-0 dropdown">
                        <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

                        </a>
                        <ul className="dropdown-menu text-small shadow">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider"></hr></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

    );
}

