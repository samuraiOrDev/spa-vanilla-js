class Hash extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /* css */`
    :host {
      
    }
    .hash {
      color: var(--primary);
    }`;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${Hash.styles}</style>
      <span class="hash">#</span>
    `;
  }
}

customElements.define('hash-component', Hash);
