import baseSearchMarkup from '../../template/baseSearchTemplate.hbs';
import createMarkupFunction from './createMarkup';
export default function createBaseMarkup() {
  const bodyRef = document.querySelector('body');
  createMarkupFunction(bodyRef, baseSearchMarkup());
}
