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

interface UserLogin {
    email: string;
    password: string;
}

interface AuthResponse {
    status: string;
    token: string;
}

export type { Response, User, UserLogin, AuthResponse };