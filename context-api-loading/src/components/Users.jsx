import React, { useState } from 'react';
 
import { getUsers } from '../services/api';
import Loading from './Loading';

const Users = () => {

    const [isLoading, setIsLoading] = useState(false);

    const getUsersAsync = async () => {
        setIsLoading(true);
        const response = await getUsers().then(response => {
            setIsLoading(false);
            return response;
        });
        console.log({ response });
    }

    return (
        <>
            <button onClick={getUsersAsync}>Buscar usuários</button>
            <Loading loading={isLoading} message='Carregando usuários...' />
        </>
    );
}

export default Users;