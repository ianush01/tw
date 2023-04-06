import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {
    const {onClick} =props
    const handleClick = () => {
        onClick()

    }
    const handleClick1 = () => {
      alert("Ianus")
        console.log("Ianus")
    }
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text" onClick={handleClick} >Text</Button>
            <Button variant="contained" onClick={handleClick} >Contained</Button>
            <Button variant="outlined" onClick={handleClick1} >Outlined</Button>
        </Stack>
    );
}