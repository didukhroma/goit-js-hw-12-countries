import { error, defaultStack } from '@pnotify/core/dist/PNotify.js';
function pnotifyError(string) {
  return error({
    title: string,
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
