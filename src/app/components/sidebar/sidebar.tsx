import React, { FC } from 'react';
import "./styles.css";
import { SidebarOption } from '../SideBarOptions/SidebarOptions';

interface SidebarProps { }

export const Sidebar: FC<SidebarProps> = () => {
    return (
        <aside className="d-none d-lg-flex flex-column flex-shrink-0 p-3 m-2 rounded-4" style={{ width: '280px', backgroundColor: '#DBD2EE' }}>
            <SidebarOption />
        </aside>
    );
}

