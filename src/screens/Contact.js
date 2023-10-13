import '../components/Contact/ContactHome';

class Contact extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <contact-section-component></contact-section-component>
      `;
  }
}

customElements.define('contact-component', Contact);
