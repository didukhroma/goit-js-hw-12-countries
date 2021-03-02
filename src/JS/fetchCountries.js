const url = 'https://restcountries.eu/rest/v2/name/united';
export default fetch(url)
  .then(response => response.json())
  .then(console.log);
