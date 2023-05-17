import { useState } from 'react';

export const useForm = <T extends Object>( formulario: T ) => {
    
    const [state, setState] = useState( formulario );

    const onChange = ( value: string, campo: keyof T ) => {
        setState({
            ...state,
            [campo]: value
        });
    }

    const resetearForm = () => {
        setState(formulario)
    }


    return {
        ...state,
        formulario: state,
        onChange,
        resetearForm
    }

}
