import _debounce from 'lodash';
import { error } from '@pnotify/core';
import createBaseMarkup from './createBaseMarkup.js';
import oneCountryTemplate from '../template/oneCountryTemplate.hbs';
import manyCountryTemplate from '../template/manyCountryTemplate.hbs';
import createMarkup from './createMarkup';
import API from './fetchCountries';
createBaseMarkup();
//-------------------------------------
// const Handlebars = require('handlebars');
// Handlebars.registerHelper('lengthOfLanguage', function (value) {
//   return value.length > 1;
// });
//-------------------------------------
const refs = {
  boxRef: document.querySelector('.search-result'),
  inputRef: document.querySelector('#js-input'),
};
//----------------
// let searchQuery = null;
refs.inputRef.addEventListener('input', _.debounce(onInputChange, 1000));
//----------------------------------------------------------------------
function onInputChange(event) {
  let searchQuery = event.target.value;
  if (!searchQuery) return; //фикс ошибки после ввода значения в строку-поиска и удаления ввода
  API.fetchCountries(searchQuery).then(result => {
    if (result.length === 1) {
      const { languages } = result[0];
      let isOneNationalLanguage = languages.length === 1;
      createMarkup(
        refs.boxRef,
        oneCountryTemplate({ isOneNationalLanguage, ...result[0] }),
      );
    } else if (result.length >= 2 && result.length <= 10) {
      createMarkup(refs.boxRef, manyCountryTemplate(result));
    } else {
      createMarkup(refs.boxRef, '');
      error({
        title: 'Oh No!',
        text:
          "Something really terrible happened. You really need to read this, so I won't close automatically.",
        hide: false,
        sticker: false,
        icon: false,
      });
    }
    // alert('incorect input')
  });
}
//----------------
