'use client'
import { Loader } from '@/app/components/loader/loader';
import { Navbar } from '@/app/components/navbar/navbar';
import React, { useEffect, useState } from 'react';
import { useStore } from '@/store/store';
import { Sidebar } from '@/app/components/sidebar/sidebar';
import Image from 'next/image';
import { Card, Text, Badge, Button, Group, Menu, rem } from '@mantine/core';

interface Props {
    params: {
        slug: string
    }
}

const Pet: React.FC<Props> = ({ params }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pet, setPet] = useState<any>({});
    const [owner, setOwner] = useState<any>({});
    const [isTheOwner, setIsTheOwner] = useState(false);
    const { getPetById, getUserById, user } = useStore();

    useEffect(() => {
        const getPet = async (): Promise<void> => {
            const pet = await getPetById(params.slug);

            setPet(pet);
        };

        getPet();
    }, [params.slug, getPetById]);

    useEffect(() => {
        const getOwner = async (): Promise<void> => {
            const userOwner = await getUserById(pet.owner);

            setOwner(userOwner);
            setIsLoading(false);
        }

        if (pet.owner) getOwner();
    }, [pet, getUserById]);

    useEffect(() => {
        const checkOwner = (): void => { if (user?._id === owner?._id) setIsTheOwner(true); }

        if (user && owner) checkOwner();
    }, [user, owner]);


    return (
        <>
            <Navbar />
            {isLoading ? <Loader />
                :
                <main className='d-flex overflow-hidden'>
                    <Sidebar />
                    <section className='d-flex w-100 flex-column flex-lg-row min-vh-100 p-3 gap-2'>
                        <Image className='d-flex flex-grow-1 rounded-3 img-fluid align-self-center align-self-lg-start' style={{ objectFit: 'cover' }} src={pet.image} alt="pet image" width={483} height={711} />

                        <div className='d-flex flex-grow-1 flex-column gap-2'>
                            <article className='px-4 py-3 rounded-4 card mb-3' style={{ backgroundColor: '#B3A5D4' }}>
                                <h2>{pet.name}</h2>
                                <h4 className='text-secondary'>{pet.age}, {pet.breed}, {pet.size}</h4>

                                <h5 className='my-3 lh-sm'>{pet.description}</h5>
                                <Group gap="xs">
                                    <Badge color="grape">{pet.stirilized ? 'Esterilizado' : 'No esterilizado'}</Badge>
                                    <Badge color="grape">{pet.typeOfPet}</Badge>
                                    <Badge color="grape">{pet.sex}</Badge>
                                </Group>
                            </article>
                            <Card shadow="sm" radius="md" withBorder>
                                <h4 className='text-center'>
                                    <Badge color="grape" variant="light" size="xl">Información del dueño</Badge>
                                </h4>
                                <div className='p-3 d-flex flex-row align-items-center gap-4 justify-content-center'>
                                    <Card.Section>
                                        <Image src={pet.image} className="object-fit-cover rounded-circle" alt="owner image" width={180} height={180} />
                                    </Card.Section>
                                    <div>
                                        <h5>{owner.name}</h5>
                                        <h6>{owner.username}</h6>
                                        <p>{owner.email}</p>
                                    </div>
                                </div>
                            </Card>
                            <Card shadow="sm" padding="lg" radius="md" withBorder>
                                <Text fw={500}>Tu eres el dueño de esta mascota!</Text>

                                <Text c="dimmed">
                                    Administrala para poder gestionar tu mascota
                                </Text>

                                <Group justify="center">
                                    <Button color="grape" mt="md" radius="md">
                                        Editarla
                                    </Button>
                                    <Button color="red" variant="outline" mt="md" radius="md">
                                        Eliminarla
                                    </Button>
                                </Group>
                            </Card>
                        </div>
                    </section>
                </main>
            }
        </>
    );
}

export default Pet;
