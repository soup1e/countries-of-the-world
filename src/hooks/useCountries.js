import { useState, useEffect } from 'react';
import { getCountries } from '../services/getCountries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [type, setType] = useState('all');
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  const filterCountries = () => {
    if (type === 'all') return countries;
    return countries.filter((country) => country.continent === type);
  };

  return { filterCountries, type, setType, error };
}
