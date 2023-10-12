import { loadContentForRoute } from '../lib';

class Navegation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector('nav').addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
        event.preventDefault();
        const route = event.target.getAttribute('href');
        window.history.pushState({ route }, '', route);
        loadContentForRoute(route);
      }
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
          /* Estilos para el botón personalizado */
        </style>
       
        <nav>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
      `;
  }
}

customElements.define('navegation-component', Navegation);
