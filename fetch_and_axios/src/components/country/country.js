import React from "react";
import './country.css';

export const Country = ({
  country: { name, capital, flag, languages, population, currencies },
}) => {
  const formattedCapital =
    capital?.length > 0 ? (
      <>
        <span>Capital: </span>
        {capital}
      </>
    ) : (
      ''
    )
  const formatLanguage = languages.length > 1 ? `Languages` : `Language`;
  const currencyData = currencies && currencies.length ? currencies[0] : {};

  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flag} alt={name} width={300} height={250}/>
      </div>
      <h3 className='country_name'>{name.toUpperCase()}</h3>
      <div className='country_text'>
        <p>{formattedCapital}</p>
        <p>
          <span>{formatLanguage}: </span>
          {languages.map((language) => language.name).join(', ')}
        </p>
        <p>
          <span>Population: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span>Currency: </span>
          {currencyData ? `${currencyData?.symbol} ${currencyData?.name}` : ''}
        </p>
      </div>
    </div>
  )
}