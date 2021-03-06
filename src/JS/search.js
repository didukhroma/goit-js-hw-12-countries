import _debounce from 'lodash';
import createBaseMarkup from './markup/createBaseMarkup.js';
import oneCountryTemplate from '../template/oneCountryTemplate.hbs';
import manyCountryTemplate from '../template/manyCountryTemplate.hbs';
import createMarkup from './markup/createMarkup';
import API from './api/fetchCountries';
import { pnotifyError, closeAllNotice } from './components/pnotify';
import refLink from './components/refs';
//----------------------------------------------------------------------
createBaseMarkup();
//----------------------------------------------------------------------
const { boxRef, inputRef } = refLink();
//----------------------------------------------------------------------
function onInputChange({ target }) {
  closeAllNotice();
  const searchQuery = target.value;
  if (!searchQuery) return;

  API.fetchCountries(searchQuery)
    .then(response => {
      const resultOneCountry = response.reduce((acc, item) => (acc = item));
      if (response.length === 1) {
        const { languages } = resultOneCountry;
        const isOneNationalLanguage = languages.length === 1;
        createMarkup(
          boxRef,
          oneCountryTemplate({ isOneNationalLanguage, ...resultOneCountry }),
        );
      } else if (response.length <= 10) {
        createMarkup(boxRef, manyCountryTemplate(response));
      } else {
        throw 'Too many matches found';
      }
    })
    .catch(error => {
      createMarkup(boxRef, '');
      pnotifyError(error);
    });
}
const searchService = () =>
  inputRef.addEventListener('input', _.debounce(onInputChange, 1000));

//----------------------------------------------------------------------
searchService();
