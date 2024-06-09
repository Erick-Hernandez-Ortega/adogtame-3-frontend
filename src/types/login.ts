export interface LineStyle {
    margin: string;
    width: string;
    borderTop: string;
    position: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    top: string;
    float: 'left' | 'right' | 'none';
}

export interface OverlayStyle {
    position: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    top: number;
    left: number;
    width: string;
    height: string;
    backgroundColor: string;
    display: 'flex' | 'block' | 'inline' | 'inline-block' | 'inline-flex' | 'none';
    justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'initial' | 'inherit';
    alignItems: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | 'initial' | 'inherit';
}

export interface TextOverlayImage {
    color: string;
    fontSize: string;
    fontWeight: string;
    textAlign: 'center' | 'left' | 'right' | 'justify' | 'initial' | 'inherit';
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
