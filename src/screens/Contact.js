class Contact extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
          /* Estilos para el botón personalizado */
        </style>
        <p>Contact Page</p>
      `;
  }
}

customElements.define('contact-component', Contact);
