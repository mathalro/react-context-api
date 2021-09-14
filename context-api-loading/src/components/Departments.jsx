import React from 'react';
 
import { getDepartments } from '../services/api';

const Departments = () => {

    const getDepartmentsAsync = async () => {
        const response = await getDepartments();
        console.log({ response });
    }

    return (
        <button onClick={getDepartmentsAsync}>Buscar departamentos</button>
    );
}

export default Departments;