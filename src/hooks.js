import { useState } from "react";

export function useFormInput(val){
    const [value,setValue] = useState(val)

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}