import searchInputMarkup from '../template/searchInputTemplate.hbs';
import createMarkupFunction from './createMarkup';
export default function createBaseMarkup(){
  const bodyRef = document.querySelector('body');
  createMarkupFunction(bodyRef, searchInputMarkup());
}
