import React from "react";
import useUserStore from '../../stores/user'
const UserForm = () => {

    const addUser = useUserStore(state => state.addUser);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const name = (e.target as any).name.value;
        const email = (e.target as any).name.value;

        addUser({
            name,
            email
        })
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="name" placeholder="Nome"/>
                <input name="email" placeholder="Email"/>
                <button type="submit">Create User</button>
            </form>
        </div>  
    );
}

export default UserForm;