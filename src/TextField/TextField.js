import './TextField.css';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';


export default function UseFormControl() {
return (
    <div style={{display: "flex", margin: "30px", }}>
        <Box component="form" noValidate autoComplete="off">
            <OutlinedInput placeholder="Please enter text" />    
        </Box>
    </div>
  );
}