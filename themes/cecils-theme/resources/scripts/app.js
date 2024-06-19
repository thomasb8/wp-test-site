import domReady from '@roots/sage/client/dom-ready';

/**
 * Application entrypoint
 */
domReady(async () => {
  const header = document.querySelector('header');
  const navToggle = document.querySelector('.nav-toggle');
  const navToggleIcon = document.querySelector('.nav-toggle-icon');
  const navMenu = document.querySelector('.nav-primary');

  navToggle.addEventListener('click', () => {
    navToggleIcon.classList.toggle('close');
    navMenu.classList.toggle('open')
    header.classList.toggle('open');
  })
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);
