import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Country } from './components/country/country';

const App = () => {
  const [apiData, setApiData] = useState([]);
  const url = 'https://restcountries.com/v2/all';

  useEffect(() => {
    // Definition of the async function
    const fetchCountryDataAxios = async () => {
      try {
        const response = await axios.get(url);
        const data = await response.data;

        setApiData(data);

      } catch (error) {
        console.log('Error from catch: ', error);
      }
    }
    // Calling the async function
    fetchCountryDataAxios();
  }, []);

  return (
    <div className='App'>
      <h1>React Component Life Cycle</h1>
      <h1>Calling API</h1>
      <div>
        <p>There are  {apiData.length} countries in the api</p>
        <div className='countries-wrapper'>
          {
            apiData.map((country) => <Country country={country} key={country.name} />)
          }
        </div>
      </div>
    </div>
  )
}

export default App;