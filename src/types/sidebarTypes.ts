interface PageProps {
    logout: () => Promise<void>;
    isLogged: boolean
}

export default PageProps;