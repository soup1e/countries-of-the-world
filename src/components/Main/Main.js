import React from 'react';
import { useCountries } from '../../hooks/useCountries.js';
import Countries from '../Countries/Countries';

import './Main.css';
export default function Main() {
  const { filterCountries, type, setType } = useCountries();

  return (
    <div>
      <div className="select">
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>
      </div>
      <div className="countries">
        {filterCountries().map((name) => (
          <Countries key={name.id} {...name} />
        ))}
      </div>
    </div>
  );
}
