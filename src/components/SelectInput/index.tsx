import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

interface SelectInputProps {
    options: { value: string; label: string }[];
    defaultValue?: string;
}
const SelectInput = ({options, defaultValue}: SelectInputProps) => {
    const [selectedValue, setSelectedValue] = React.useState<string>('');

    return (
        <TextField
            select
            defaultValue={defaultValue}
            value={selectedValue}
            fullWidth
            onSelect={(e) => setSelectedValue(e.target.value)}
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}

export default SelectInput;