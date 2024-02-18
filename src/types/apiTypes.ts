interface Response {
    status: string;
    message: string;
}

interface User {
    email: string;
    name: string;
    username: string;
    password: string;
    age: string;
}

export type { Response, User };