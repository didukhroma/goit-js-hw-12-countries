import _debounce from 'lodash';
import '../../node_modules/@pnotify/core/dist/Material.css';
import { alert } from '../../node_modules/@pnotify/core/dist/PNotify';
// console.dir(PNotify);
// import { alert } from '@pnotify/core';
import createBaseMarkup from './createBaseMarkup.js';
import oneCountryTemplate from '../template/oneCountryTemplate.hbs';
import manyCountryTemplate from '../template/manyCountryTemplate.hbs';
import createMarkup from './createMarkup';
import API from './fetchCountries';
createBaseMarkup();
const refs = {
  boxRef: document.querySelector('.search-box'),
  inputRef: document.querySelector('#js-input'),
};
//----------------
let searchQuery;
refs.inputRef.addEventListener('input', _.debounce(onInputChange, 1000));
function onInputChange(event) {
  searchQuery = event.target.value;
  API.fetchCountries(searchQuery).then(result => {
    console.log(result);
    if (result.length === 1) {
      createMarkup(refs.boxRef, oneCountryTemplate(result[0]));
    } else if (result.length >= 2 && result.length <= 10) {
      createMarkup(refs.boxRef, manyCountryTemplate(result));
    } else {
      alert({
        title: 'Oh No!',
        text: 'Something terrible happened.',
      });
    }
    // alert('incorect input')
  });
}
//----------------
