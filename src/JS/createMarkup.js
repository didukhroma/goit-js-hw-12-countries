export default function (selector, markup) {
  console.log(selector);
  selector.insertAdjacentHTML('beforeend', markup);
}
