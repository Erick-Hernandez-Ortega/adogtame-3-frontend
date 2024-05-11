export interface BoxStyleRegistro {
    boxShadow: string;
    minHeight: string;
}

export interface FormRegisterState {
    name: string;
    nameClass: string;
    username: string;
    usernameClass: string;
    email: string;
    emailClass: string;
    password: string;
    passwordClass: string;
}

export interface NewUser {
    name: string;
    email: string;
    age: string;
    username: string;
    password: string;
}