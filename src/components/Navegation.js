import LogoSvg from '../aseets/Logo.svg';
import './Hash';

class Navegation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /* css */`
    :host {
      --height-nav: 50px;
    }
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: var(--height-nav);
    }
    nav .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: var(--white)
    }
    nav .links {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    nav .links a {
      text-decoration: none;
      color: var(--white);
    }
    @media (max-width: 500px) {
      nav { 
        height: auto;
        justify-content: center;
        flex-direction: column;
        line-height: 40px
      }
    }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${Navegation.styles}</style>
      <nav>
        <div class="logo">
          <img src=${LogoSvg} title="LogoSvg" height="30" width="30" />
          <span>Samuraior.dev</span>
        </div>
        <div class="links">
          <div>
            <hash-component></hash-component>
            <link-component to='/' title='Home' ></link-component>
          </div>
          <div>
            <hash-component></hash-component>
            <link-component to='/about' title='About'></link-component>
          </div>
          <div>
            <hash-component></hash-component>
            <link-component to='/contact' title='Contact'></link-component>
          </div>
          <div>
            <hash-component></hash-component>
            <link-component to='/projects' title='Projects'></link-component>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('navegation-component', Navegation);
