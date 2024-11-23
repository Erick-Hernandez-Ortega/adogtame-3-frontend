'use client'
import { User, UserForm } from '@/types/user';
import { updateUser } from '@/utils/userAPI';
import { useState } from 'react';

type ProfileFormProps = {
    user: User
}

export const ProfileForm = ({ user }: ProfileFormProps) => {

    const [userForm, setUserForm] = useState<UserForm>({
        name: '',
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setUserForm({
            ...userForm,
            [name]: value,
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //console.log('User Data:', userFrom);

        const response = await updateUser(userForm)
        console.log(response);
        
    }

    return (
        <form className="w-75" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder={user.name}
                    value={userForm.name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder={user.username}
                    value={userForm.username}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder={user.email}
                    value={userForm.email}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password (optional):</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    value={userForm.password}
                    onChange={handleChange}
                />
            </div>
            <input type="submit" className="btn btn-primary" value={'Editar Información'} />
        </form>
    );
}
