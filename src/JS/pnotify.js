import { error, defaultStack } from '@pnotify/core/dist/PNotify.js';
function pnotifyError() {
  return error({
    title: 'Too many matches found',
    text: 'Please enter a more specific name!!!',
    icon: false,
    hide: false,
    closer: true,
    sticker: false,
    destroy: true,
  });
}
function closeAllNotice() {
  return defaultStack.close();
}
export { pnotifyError, closeAllNotice };
