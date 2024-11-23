export interface User {
    _id: string;
    name: string;
    username: string;
    age: string;
    email: string;
    imagen: string;
    isTokenRemoved: boolean;
    date: string;
}

export interface UserForm {
    name: string;
    username: string;
    email: string;
    password?: string;
}