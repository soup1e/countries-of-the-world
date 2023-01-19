import { checkError, client } from './client';

export async function getCountries() {
  const res = await client.from('countries').select('*');
  return checkError(res);
}
