export interface LineStyle {
    margin: string;
    width: string;
    borderTop: string;
    position: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    top: string;
    float: 'left' | 'right' | 'none';
}

export interface BoxStyle {
    boxShadow: string;
}

export interface LoginErrorResponse {
    error: string;
    message: string;
}

export interface LoginSuccessResponse {
    status: string;
    token: string;
}

export interface UserLogin {
    email: string;
    password: string;
}
