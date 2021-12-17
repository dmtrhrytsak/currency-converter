import { Rate } from '../types/Rate';
import { request } from './request';

const BASE_URL = 'https://api.currencyfreaks.com';
const API_KEY = '034ae1f94fe74ab0b875533005cc4155';

const getRates = async (urlParams: string = '', searchParams: string = '') =>
  request<Rate>(`${BASE_URL}${urlParams}?apikey=${API_KEY}${searchParams}`);

export const getLatestRates = async () => getRates('/latest');
