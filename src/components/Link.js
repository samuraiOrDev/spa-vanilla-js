import { loadContentForRoute } from '../lib';

class Link extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['title', 'to'];
  }

  static get styles() {
    return /* css */`
    :host {}
    .active {
      color: var(--primary) !important;
    }
    a {
      text-decoration: none;
      color: var(--white);
    }
    `;
  }

  connectedCallback() {
    this.render();

    const element = this.shadowRoot.querySelector('a');

    element.addEventListener('click', (event) => {
      event.preventDefault();
      const route = event.target.getAttribute('href');
      window.history.pushState({ route }, '', route);
      loadContentForRoute(route);
    });
  }

  render() {
    const title = this.getAttribute('title');
    const to = this.getAttribute('to');
    this.shadowRoot.innerHTML = /* html */`
    <style>${Link.styles}</style>
      <a href=${to} title=${title}>
        ${title}
      </a>
    `;
  }
}

customElements.define('link-component', Link);
