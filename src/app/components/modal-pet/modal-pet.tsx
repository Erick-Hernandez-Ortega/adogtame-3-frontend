import React, { FC, useState } from 'react';
import { Button, CloseButton, FileButton, Group, Modal, Select, Stepper, Switch, Text, TextInput, Textarea } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconCheck, IconDog, IconPhoto } from '@tabler/icons-react';
import Image from 'next/image';

interface ModalPetProps {
    opened: boolean;
    close: () => void;
}

export const ModalPet: FC<ModalPetProps> = ({ opened, close }) => {
    const isMobile: boolean | undefined = useMediaQuery('(max-width: 50em)');
    const [active, setActive] = useState(0);
    const [files, setFiles] = useState<File[]>([]);
    const [pet, setPet] = useState({
        name: '',
        breed: '',
        description: '',
        sex: 'Macho',
        typeOfPet: 'Perro',
        size: 'Pequeño',
        age: '',
        stirilized: false,
        images: []
    })

    const nextStep = (): void => {
        setActive((current) => (current < 3 ? current + 1 : current));

        if (active === 2) handleSubmit();
    }

    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const handleFileChange = (files: File[]): void => {
        if (files.length > 5) return;

        setFiles(files);
    }

    const removeImage = (index: number): void => {
        files.splice(index, 1);
        setFiles([...files]);
    }

    const setBreed = (value: string): void => {
        const alphabeticRegex: RegExp = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;
        if (alphabeticRegex.test(value))
            setPet({ ...pet, breed: value });
    }

    const validateForm = (): boolean => {
        switch (active) {
            case 0:
                if (pet.name.length > 0 && pet.breed.length > 0 && pet.description.length > 0 && pet.age.length > 0) return true
                break;
            case 1:
                if (files.length > 0) return true
                break;
            case 2:
                return true;
            default:
                return false;
        }
        return false;
    }

    const handleSubmit = (): void => {

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
                        value={pet.name}
                        onChange={(e) => setPet({ ...pet, name: e.target.value })}
                        description="Ingresa el nombre completo de tu mascota."
                        withAsterisk
                        placeholder="Nombre completo"
                        variant='filled'
                        className='mb-3'
                    />
                    <TextInput
                        label="Raza de la mascota"
                        value={pet.breed}
                        onChange={(e) => setBreed(e.target.value)}
                        description="Ingresa la raza de tu mascota, si la desconoce poner 'Desconocido'."
                        withAsterisk
                        placeholder="Raza"
                        className='mb-3'
                        variant='filled'
                    />
                    <TextInput
                        label="Edad de la mascota"
                        value={pet.age}
                        onChange={(e) => setPet({ ...pet, age: e.target.value })}
                        description="Ingresa la raza de tu mascota, si la desconoce poner 'Desconocido'."
                        withAsterisk
                        placeholder="Edad"
                        className='mb-3'
                        variant='filled'
                    />
                    <Textarea
                        variant="filled"
                        value={pet.description}
                        onChange={(e) => setPet({ ...pet, description: e.target.value })}
                        label="Descripción de la mascota"
                        className='mb-3'
                        withAsterisk
                        description="Proporcione detalles importantes sobre la mascota."
                        placeholder="Es un cachorro..."
                    />
                    <Select
                        label="Tipo de mascota"
                        value={pet.typeOfPet}
                        onChange={(e) => setPet({ ...pet, typeOfPet: e! })}
                        description="Ingresa el tipo de mascota."
                        withAsterisk
                        placeholder='Tipo'
                        variant='filled'
                        className='mb-3'
                        data={['Perro', 'Gato', 'Otro']} />
                    <Select
                        label="Tamaño de la mascota"
                        description="Ingresa el tamaño de mascota."
                        value={pet.size}
                        onChange={(e) => setPet({ ...pet, size: e! })}
                        placeholder='Tamaño'
                        withAsterisk
                        variant='filled'
                        className='mb-3'
                        data={['Pequeño', 'Mediano', 'Grande', 'Extragrande']} />
                    <Select
                        label="Sexo de la mascota"
                        description="Ingresa el sexo de mascota."
                        value={pet.sex}
                        onChange={(e) => setPet({ ...pet, sex: e! })}
                        placeholder='Sexo'
                        withAsterisk
                        variant='filled'
                        className='mb-3'
                        data={['Macho', 'Hembra', 'Desconocido']} />
                    <Switch
                        className='mb-3'
                        checked={pet.stirilized}
                        onChange={(event) => setPet({ ...pet, stirilized: event.currentTarget.checked })}
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
                                <CloseButton className='position-absolute' size="lg" onClick={() => removeImage(index)} variant="transparent" />
                                <Image src={URL.createObjectURL(file)} alt={file.name} width={200} height={200} className="rounded shadow object-fit-cover" />
                            </figure>
                        ))}
                    </div>
                </Stepper.Step>
                <Stepper.Step label="Ultimo paso" description="Verificar información" icon={<IconCheck />}>
                    <Text size="lg" className='text-center mb-2' >Antes de enviar confirma la información.</Text>
                    <section className='d-flex flex-column align-items-center'>
                        <div className='d-flex flex-wrap gap-2 mt-3 '>
                            {files.map((file: File, index: number) => (
                                <figure key={index}>
                                    <CloseButton className='position-absolute' size="lg" onClick={() => removeImage(index)} variant="transparent" />
                                    <Image src={URL.createObjectURL(file)} alt={file.name} width={200} height={200} className="rounded shadow object-fit-cover" />
                                </figure>
                            ))}
                        </div>
                        <Text fw={700}>Nombre: <span className='fw-normal'>{pet.name}</span></Text>
                        <Text fw={700}>Raza: <span className='fw-normal'>{pet.breed}</span></Text>
                        <Text fw={700}>Edad: <span className='fw-normal'>{pet.age}</span></Text>
                        <Text fw={700}>Descripcion: <span className='fw-normal'>{pet.description}</span></Text>
                        <Text fw={700}>Tipo de mascota: <span className='fw-normal'>{pet.typeOfPet}</span></Text>
                        <Text fw={700}>Tamaño: <span className='fw-normal'>{pet.size}</span></Text>
                        <Text fw={700}>Sexo: <span className='fw-normal'>{pet.sex}</span></Text>
                        <Text fw={700}>Esta esterilizado: <span className='fw-normal'>{pet.stirilized ? 'Si' : 'No'}</span></Text>
                    </section>
                </Stepper.Step>
                <Stepper.Completed>
                    <div className="d-flex justify-content-center">
                        <IconCheck className='text-success' size={50} />
                    </div>
                    <Text size="lg" className='text-center' fw={700}>¡Listo!</Text>
                    <Text size="md" className='text-center' >¡Gracias por dar este gran paso para mejorar su vida! Tu dedicación y amor están ayudando a crear un mundo mejor para nuestras queridas mascotas.</Text>
                </Stepper.Completed>
            </Stepper>

            <Group justify="center" mt="xl">
                {active !== 3 &&
                    <>
                        <Button variant='default' onClick={prevStep}>Atras</Button>
                        <Button onClick={nextStep} disabled={!validateForm()} style={{ backgroundColor: '#a87feb' }}>Siguiente</Button>
                    </>
                }
            </Group>
        </Modal>

    );
}

