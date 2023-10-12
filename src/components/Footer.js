import LogoSvg from '../aseets/Logo.svg';
import './SocialMedia';

class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get styles() {
    return /* css */`
    :host {}

    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    footer .logo-section {
      display: flex;
      flex-direction: column;
      color: var(--white)
    }
    footer .logo-section .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    footer .logo-section .logo .text-logo {
      color: var(--gray);
    }
    footer .logo-section .text {
      margin-top: var(--p-20);
    }
    @media(max-width: 500px) {
      footer {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      footer .logo-section .text { 
        text-align: center;
        margin-bottom: 20px;
      }
      footer .logo-section .logo  {
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
    }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${Footer.styles}</style>
        <footer>
          <div class="logo-section">
            <div class="logo">
              <img src=${LogoSvg} title="LogoSvg" height="30" width="30" />
              <span class="text-logo">samurai.dev.ordiales@gmail.com</span>
            </div>
            <div class="text">
              Copyright @ 2023 Samuraior.dev
            </div>
          </div>
          <social-media-component></social-media-component>
        </footer>
      `;
  }
}

customElements.define('footer-component', Footer);
