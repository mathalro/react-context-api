import React from 'react';
 
import { getDepartments } from '../services/api';
import useLoading from '../store/state/loading-provider';

const Departments = () => {

    const loading = useLoading();

    const getDepartmentsAsync = async () => {
        loading.showLoading('Carregando departamentos');
        const response = await getDepartments().then(response => {
            loading.hideLoading();
            return response;
        });
        console.log({ response });
    }

    return (
        <>
            <button onClick={getDepartmentsAsync}>Buscar departamentos</button>
        </>
    );
}

export default Departments;