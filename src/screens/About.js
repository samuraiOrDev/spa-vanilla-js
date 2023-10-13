import '../components/About/AboutMe';
import '../components/About/Skills';

class About extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Crear un Shadow DOM
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <about-me-contact-component></about-me-contact-component>
    <skills-about-me-component></skills-about-me-component>
      `;
  }
}

customElements.define('about-component', About);
