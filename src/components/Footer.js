class Footer extends HTMLElement {
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
       
        <footer>
            &copy; Víctor Manuel Ordiales García
        </footer>
      `;
  }
}

customElements.define('footer-component', Footer);
