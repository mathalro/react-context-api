import React, { useState } from 'react';
 
import { getDepartments } from '../services/api';
import Loading from './Loading';

const Departments = () => {
    const [isLoading, setIsLoading] = useState(false);

    const getDepartmentsAsync = async () => {
        setIsLoading(true);
        const response = await getDepartments().then(response => {
            setIsLoading(false);
            return response;
        });
        console.log({ response });
    }

    return (
        <>
            <button onClick={getDepartmentsAsync}>Buscar departamentos</button>
            <Loading loading={isLoading} message='Carregando departamentos...' />
        </>
    );
}

export default Departments;