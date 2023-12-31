/* eslint-disable import/extensions */
import '@/css/style.css';
import '@/screens/About.js';
import '@/screens/Home.js';
import '@/screens/Contact.js';
import '@/screens/Projects.js';
import '@/screens/NoFound.js';
import '@/components/Navegation.js';
import '@/components/Footer.js';
import '@/components/BarSeparator.js';

import { loadContentForRoute } from './lib';

window.addEventListener('popstate', (event) => {
  const { state } = event;
  if (state) { loadContentForRoute(state.route); }
});
window.addEventListener('load', () => loadContentForRoute(window.location.pathname));
