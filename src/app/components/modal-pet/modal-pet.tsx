import React, { FC, useState } from 'react';
import { Button, Group, Modal, Stepper, Switch, TextInput, Textarea } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { DateInput } from '@mantine/dates';
import { IconCheck, IconDog, IconPhoto } from '@tabler/icons-react';

interface ModalPetProps {
    opened: boolean;
    close: () => void;
}

export const ModalPet: FC<ModalPetProps> = ({ opened, close }) => {
    const isMobile: boolean | undefined = useMediaQuery('(max-width: 50em)');
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <Modal
            opened={opened}
            onClose={close}
            fullScreen={isMobile}
            size={'xl'}
            title="Publicar una mascota en Adogtame"
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
            transitionProps={{ transition: 'fade', duration: 300 }}
        >
            <Stepper active={active} color='#a87feb' onStepClick={setActive} allowNextStepsSelect={false}>
                <Stepper.Step label="Primer paso" description="Información" icon={<IconDog />}>
                    <TextInput
                        label="Nombre de la mascota"
                        description="Ingresa el nombre completo de tu mascota."
                        withAsterisk
                        placeholder="Nombre completo"
                        variant='filled'
                        className='mb-3'
                    />
                    <TextInput
                        label="Raza de la mascota"
                        description="Ingresa la raza de tu mascota, si la desconoce poner 'Desconocido'."
                        withAsterisk
                        placeholder="Raza"
                        className='mb-3'
                        variant='filled'
                    />
                    <DateInput
                        // value={value}
                        // onChange={setValue}
                        variant="filled"
                        className='mb-3'
                        locale='es-mx'
                        withAsterisk
                        valueFormat="DD MMM YYYY"
                        description="Ingresa fecha de nacimiento de tu mascota, si la desconoce poner la fecha cuando la encontro."
                        label="Fecha de nacimiento"
                        placeholder="Fecha de nacimiento"
                    />
                    <Textarea
                        variant="filled"
                        label="Descripción de la mascota"
                        className='mb-3'
                        withAsterisk
                        description="Proporcione detalles importantes sobre la mascota."
                        placeholder="Es un cachorro..."
                    />
                    <Switch
                        className='mb-3'
                        label="¿Esta mascota esta esterilizada?"
                    />
                </Stepper.Step>
                <Stepper.Step label="Segundo paso" description="Imagenes" icon={<IconPhoto />}>
                    Step 2 content: Verify email
                </Stepper.Step>
                <Stepper.Step label="Ultimo paso" description="Verificar información" icon={<IconCheck />}>
                    Step 3 content: Get full access
                </Stepper.Step>
                <Stepper.Completed>
                    Completed, click back button to get to previous step
                </Stepper.Completed>
            </Stepper>

            <Group justify="center" mt="xl">
                <Button variant='default' onClick={prevStep}>Atras</Button>
                <Button onClick={nextStep}  style={{ backgroundColor: '#a87feb' }}>Siguiente</Button>
            </Group>
        </Modal>

    );
}

