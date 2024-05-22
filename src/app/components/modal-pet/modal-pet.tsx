import React, { FC, useState } from 'react';
import { Button, CloseButton, FileButton, Group, Modal, Stepper, Switch, Text, TextInput, Textarea } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { DateInput } from '@mantine/dates';
import { IconCheck, IconDog, IconPhoto } from '@tabler/icons-react';
import Image from 'next/image';

interface ModalPetProps {
    opened: boolean;
    close: () => void;
}

export const ModalPet: FC<ModalPetProps> = ({ opened, close }) => {
    const isMobile: boolean | undefined = useMediaQuery('(max-width: 50em)');
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    const [files, setFiles] = useState<File[]>([]);

    const handleFileChange = (files: File[]): void => {
        if (files.length > 5) return;

        setFiles(files);
    }

    const removeImage = (index: number): void => {
        files.splice(index, 1);
        setFiles([...files]);
    }

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
                    <Group justify="space-between`">
                        <Text size="md">Sube imagenes de la mascota. (5 imagenes max.)</Text>
                        <FileButton onChange={handleFileChange} accept="image/png,image/jpeg" multiple>
                            {(props) => <Button {...props}>Subir imagenes</Button>}
                        </FileButton>
                    </Group>
                    {files.length > 0 && (
                        <Text size="md" fw={700}>Imagenes seleccionadas:</Text>
                    )}

                    <div className='d-flex flex-wrap gap-2 mt-3 '>
                        {files.map((file: File, index: number) => (
                            <figure key={index}>
                                <CloseButton className='position-absolute' size="lg" onClick={() => removeImage(index)} variant="transparent"  />
                                <Image src={URL.createObjectURL(file)} alt={file.name} width={200} height={200} className="rounded shadow object-fit-cover" />
                            </figure>
                        ))}
                    </div>
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
                <Button onClick={nextStep} style={{ backgroundColor: '#a87feb' }}>Siguiente</Button>
            </Group>
        </Modal>

    );
}

