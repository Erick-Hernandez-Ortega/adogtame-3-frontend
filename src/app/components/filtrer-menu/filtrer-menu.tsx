'use client';
import React, { FC, useState } from 'react';
import { IconBone, IconCat, IconDog, IconGenderFemale, IconGenderMale, IconList, IconPaw } from '@tabler/icons-react';
import { Filtrer } from '../filtrer/filtrer';
import { Filtres } from '@/types/filtrer-menu';

export const FiltrerMenu: FC = () => {
    const [activeFilter, setActiveFilter] = useState(null as number | null);
    const filters: Filtres[] = [
        { icon: <IconList />, label: 'Todo' },
        { icon: <IconDog />, label: 'Perros' },
        { icon: <IconCat />, label: 'Gatos' },
        { icon: <IconGenderMale />, label: 'Machos' },
        { icon: <IconGenderFemale />, label: 'Hembras' },
        { icon: <IconPaw />, label: 'Cachorros' },
        { icon: <IconBone />, label: 'Adultos' },
    ];

    const handleClick = (index: number): void => {
        setActiveFilter(index === activeFilter ? null : index);
    };

    return (
        <section className='d-flex flex-row w-100 px-2 py-3 gap-3 '>
            {filters.map((filter, index: number) => (
                <Filtrer
                    key={index}
                    isActive={index === activeFilter}
                    onClick={() => handleClick(index)}
                >
                    {filter.icon}
                    {filter.label}
                </Filtrer>
            ))}
        </section>
    );
}

