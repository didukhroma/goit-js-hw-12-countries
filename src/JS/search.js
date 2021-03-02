import serchInputMarkup from '../template/searchInputTemplate.hbs';
import createMarkupFunction from './createMarkup';
const refs = {
  bodyRef: document.querySelector('body'),
};
console.log(serchInputMarkup);
console.log(createMarkupFunction);

createMarkupFunction(refs.bodyRef, serchInputMarkup());
// refs.bodyRef.insertAdjacentHTML
