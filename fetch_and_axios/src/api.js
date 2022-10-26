import axios from "axios";

// Example with Javascript fetch
const fetchCountryDataWithFetch = async () => {
  try {

    fetch('https://restcountries.com/v2/all',{
        method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => { return data; });

  } catch (error) {
    console.log('Error from catch: ', error);
  }
}

// This is just example of POST method 
const postCountryData = async (countryData) => {
  try {
    const url = 'https://example.com/';
    const data = {
       name: countryData.name, 
       capital: countryData.capital, 
       flag: countryData.flag, 
       languages: countryData.languages
    }
    const config = {}

    const response = await axios.post(url, data, config)

    if(response.status === 201) {
      return 'Success';
    } else {
      return 'Error creating country';
    }

  } catch (error) {
    console.log('Error from catch: ', error);
  }
}