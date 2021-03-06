import { BASE_URL } from '../settings/settings';
function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}${searchQuery}`).then(response => {
    if (response.status === 404) throw 'Error status 404';
    return response.json();
  });
}
export default { fetchCountries };
