import React from 'react';
 
import { getUsers } from '../services/api';

const Users = () => {
    const getUsersAsync = async () => {
        const response = await getUsers();
        console.log({ response });
    }

    return (
        <button onClick={getUsersAsync}>Buscar usuários</button>
    );
}

export default Users;