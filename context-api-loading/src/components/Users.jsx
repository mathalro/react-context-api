import React from 'react';
 
import { getUsers } from '../services/api';
import useLoading from '../store/state/loading-provider';

const Users = () => {
    const loading = useLoading();

    const getUsersAsync = async () => {
        loading.showLoading('Carregando usuários');
        const response = await getUsers().then(response => {
            loading.hideLoading();
            return response;
        });
        console.log({ response });
    }

    return (
        <>
            <button onClick={getUsersAsync}>Buscar usuários</button>
        </>
    );
}

export default Users;