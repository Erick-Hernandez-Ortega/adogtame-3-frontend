import React, { FC } from 'react';
import { IconBone, IconCat, IconDog, IconGenderFemale, IconGenderMale, IconList, IconPaw } from '@tabler/icons-react';
import { Filtrer } from '../filtrer/filtrer';

export const FiltrerMenu: FC = () => {

    return (
        <section className='d-flex flex-row bg-danger w-100 px-2 py-3 gap-3 '>
            <Filtrer isActive={true}>
                <IconList />
                Todo
            </Filtrer>
            <Filtrer isActive={false}>
                <IconDog />
                Perros
            </Filtrer>
            <Filtrer isActive={false}>
                <IconCat />
                Gatos
            </Filtrer>
            <Filtrer isActive={false}>
                <IconGenderMale />
                Machos
            </Filtrer>
            <Filtrer isActive={false}>
                <IconGenderFemale />
                Hembras
            </Filtrer>
            <Filtrer isActive={false}>
                <IconPaw />
                Cachorros
            </Filtrer>
            <Filtrer isActive={false}>
                <IconBone />
                Adultos
            </Filtrer>
        </section>
    );
}

