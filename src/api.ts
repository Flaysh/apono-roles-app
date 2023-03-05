import axios from 'axios';

import { Place } from './types';

const BASE_URL = 'https://apulalula-api.up.railway.app/';

const client = axios.create({
  baseURL: BASE_URL,
});

export function getPlaces(): Promise<{ places: Place[] }> {
  return client.get('/places');
}
