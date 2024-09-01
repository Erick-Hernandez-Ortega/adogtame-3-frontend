import { useStore } from "@/store/store";
import { IconLogout } from "@tabler/icons-react"

export const LogoutButton = () => {
    const { token, userLogOut } = useStore()

    const logout = async (): Promise<void> => {
        const response = await userLogOut(token);
    }

    return (
        <IconLogout style={{ cursor: 'pointer' }} onClick={logout} />
    )
}