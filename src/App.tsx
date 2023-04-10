import * as React from 'react';
import { Typography } from '@mui/material';
import {useEffect} from "react";
import isAllowed from "./isAllowed";
import AuthForm from "./components/AuthForm";
import Box from "@mui/material/Box";

export default function App() {
    return (
        <Box alignContent={'center'} alignItems={'center'} justifyContent={'center'} display={'flex'} flexDirection={'column'} height={'100vh'}>
            <Typography variant='h4' component='h1' gutterBottom>
                Apulalula Island
            </Typography>
            <AuthForm/>
        </Box>
    );
}
