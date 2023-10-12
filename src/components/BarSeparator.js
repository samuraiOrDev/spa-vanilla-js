class BarSeparator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get styles() {
    return /* css */`
    :host {
      --height: 2px;
      --p-20: 20px;
      --bd-px: 90px;
      --bm-px: 140px;
    }

    .bar-separator {
      background-color: var(--gray);
      height: var(--height);
      width: 100%;
      margin-top: var(--p-20);
      margin-bottom: var(--p-20);
      position: absolute;
      left: 0;
      bottom: var(--bd-px);
    }
    @media(max-width: 500px) {
      .bar-separator { 
        bottom: var(--bm-px);
      }
    }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BarSeparator.styles}</style>
        <div class="bar-separator"></div>
      `;
  }
}

customElements.define('bar-separator-component', BarSeparator);
