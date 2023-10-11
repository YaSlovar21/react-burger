import React, { ChangeEvent } from "react";

type TFormData = {
    [key:string] : string 
}

export function useForm(initialData:TFormData) { 
    const [values, setValues] = React.useState(initialData);

    const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [evt.target.name] : evt.target.value
        });
    }

    return {
        values,
        setValues,
        handleInputChange
    }
}