import React from "react";

export function useForm(initialData) { 
    const [values, setValues] = React.useState(initialData);

    const handleInputChange = (evt) => {
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