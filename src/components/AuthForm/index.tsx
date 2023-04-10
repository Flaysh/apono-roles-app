import React, {useEffect} from 'react';
import classes from './index.module.css';
import SelectInput from "../SelectInput";
import {citizenOptions, placeOptions} from "./utils";
import {Button, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import isAllowed from "../../isAllowed";
import {getAll, getCitizens, getPlaces} from "../../api";
const AuthForm = () => {
    const [citizens, setCitizens] = React.useState<any>();
    const [places, setPlaces] = React.useState<any>();
    const [selectedCitizen, setSelectedCitizen] = React.useState('');
    const [selectedPlace, setSelectedPlace] = React.useState('');

    // const initCitizens = async () => {
    //     const response = await getCitizens();
    //     console.log(response?.data?.citizens);
    //     setCitizens(citizens);
    // }
    //
    // const initPlaces = async () => {
    //     const response = await getPlaces();
    //     console.log(response?.data?.places);
    //     setPlaces(places)
    // }
    //
    //
    //
    // useEffect(() => {
    //     initCitizens();
    //     initPlaces();
    //     // initGetAll()
    // }, []);
    //
    //
    // if(!citizens || !places) return <div>Loading...</div>
    return (
        <Box className={classes.authForm} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <Typography variant={'subtitle1'}>Authorization Form</Typography>
            <SelectInput options={citizenOptions} defaultValue="Select a citizen"/>
            <SelectInput options={placeOptions} defaultValue="Select a place"/>
            <Button variant="outlined">Check Authorization</Button>
        </Box>
    );
};

export default AuthForm;