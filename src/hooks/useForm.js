import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [inputValores, setInputValores] = useState(initialState);
    const resetForm = () => {
        setInputValores(initialState);
    }
    const handleInputChange = ({target}) => {
        setInputValores({
            ...inputValores,
            [target.nombre]: target.value
        });
    }
    return {
        inputValores,
        handleInputChange,
        resetForm
    }
}