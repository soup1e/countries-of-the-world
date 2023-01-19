import React from 'react';
import './Countries.css';

export default function Countries({ name, iso2 }) {
  return (
    <div className="countryContainer">
      <img
        className="countryImg"
        src={`https://flagcdn.com/72x54/${iso2.toLowerCase()}.png`}
        width="72"
        height="54"
        alt={`${name}`}
      />
      <div className="CountryTitle">{name}</div>
    </div>
  );
}
