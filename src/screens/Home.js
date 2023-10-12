class Home extends HTMLElement {
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
        <p>Home Page</p>
      `;
  }
}

customElements.define('home-component', Home);
