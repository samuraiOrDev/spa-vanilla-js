class About extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Crear un Shadow DOM
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
          /* Estilos para el botón personalizado */
        </style>
        <p>About Page</p>
      `;
  }
}

customElements.define('about-component', About);
