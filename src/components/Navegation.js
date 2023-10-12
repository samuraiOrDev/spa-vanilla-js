import { loadContentForRoute } from '../lib';
import LogoSvg from '../aseets/Logo.svg';
import './Hash';

class Navegation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /* css */`
    :host {
      --height-nav: 50px;
    }
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: var(--height-nav);
    }
    nav .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: var(--white)
    }
    nav .links {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    nav .links a {
      text-decoration: none;
      color: var(--white);
    }
    .active {
      color: var(--primary) !important;
    }
    @media (max-width: 500px) {
      nav { 
        height: auto;
        justify-content: center;
        flex-direction: column;
        line-height: 40px
      }
    }
    `;
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector('nav').addEventListener('click', (event) => {
      this.shadowRoot.querySelectorAll('nav a').forEach((element) => {
        if (element.classList.contains('active')) { element.removeAttribute('class'); }
      });

      if (event.target.tagName === 'A') {
        event.preventDefault();
        const route = event.target.getAttribute('href');

        window.history.pushState({ route }, '', route);
        if (route === window.location.pathname) { event.target.setAttribute('class', 'active'); }
        loadContentForRoute(route);
      }
    });
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${Navegation.styles}</style>
      <nav>
        <div class="logo">
          <img src=${LogoSvg} title="LogoSvg" height="30" width="30" />
          <span>Samuraior.dev</span>
        </div>
        <div class="links">
          <div>
            <hash-component></hash-component>
            <a href="/home">
              Home
            </a>
          </div>
          <div>
            <hash-component></hash-component>
            <a href="/about">
              About
            </a>
          </div>
          <div>
            <hash-component></hash-component>
            <a href="/contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('navegation-component', Navegation);
