import axios from 'axios';

import { Place } from './types';

const BASE_URL = 'https://apulalula-api.up.railway.app/';

const client = axios.create({
  baseURL: BASE_URL,
});

export function getPlaces(): Promise<{ places: Place[] }> {
  return client.get('/places');
}

export function getCitizens(): Promise<{ citizens: string[] }> {
  return client.get('/citizens');
}

export function getAll (): Promise<{ places: Place[], citizens: string[] }> {
  return client.get('/');
}
