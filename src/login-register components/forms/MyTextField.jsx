import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form'

export default function MyTextField(props) {
    const { label, name, control } = props
    return (

        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },
                formstate,
            }) => (
                // pass the field need to show on the interface
                <TextField
                    id="outlined-basic"
                    onChange={onChange}
                    value={value}
                    label={label}
                    variant="outlined"
                    className='w-full'
                    error={!!error}
                    helperText={error?.message} //show the error message
                />
            )
            }
        />



    );
}
