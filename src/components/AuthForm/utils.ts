import {Citizen, Knowledge, Option, Place} from "../../types";


const knowledge: Knowledge = {
    citizens: [
        {
            name: 'Aco',
            roles: ['Priest'],
            allowed_places: ['Armory'],
        },
        {
            name: 'Aro',
            roles: ['Carrier', 'Guard'],
        },
        {
            name: 'Baco',
            roles: ['Farmer'],
        },
    ],
    roles: [
        {
            title: 'Priest',
            allowed_places: ['Temple'],
            roles: ['Carrier'],
        },
        {
            title: 'Guard',
            allowed_places: ['Armory', 'Storage'],
        },
        {
            title: 'Carrier',
            allowed_places: ['Storage'],
            roles: ['Farmer'],
        },
        {
            title: 'Merchant',
            allowed_places: ['Market'],
            roles: ['Carrier'],
        },
        {
            title: 'Farmer',
            allowed_places: ['Farm'],
            roles: ['Merchant'],
        },
    ],
    places: [
        {
            name: 'Temple',
        },
        {
            name: 'Armory',
        },
        {
            name: 'Storage',
        },
        {
            name: 'Farm',
        },
        {
            name: 'Market',
        },
    ],
};

export const citizenOptions: Option[] = knowledge.citizens.map((citizen: Citizen) => ({
    value: citizen.name,
    label: citizen.name,
}));


export const placeOptions: Option[] = knowledge.places.map((place: Place) => ({
    value: place.name,
    label: place.name,
}));