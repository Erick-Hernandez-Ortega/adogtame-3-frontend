import { User } from '@/types/user';

type ProfileFormProps = {
    user: User
}

export const ProfileForm = ({ user }: ProfileFormProps) => {
    return (
        <form className="w-75">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={'a'}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    value={'b'}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={'c'}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password (optional):</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    value={'d'}
                />
            </div>
            <button type="submit" className="btn btn-primary">Update Profile</button>
        </form>
    );
}
