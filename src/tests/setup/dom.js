import "jsdom-global/register";

global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

global.cancelAnimationFrame = callback => {
  setTimeout(callback, 0);
};
