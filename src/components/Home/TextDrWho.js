import ComillasSvg from '../../aseets/comillas.svg';

class TextDrWho extends HTMLElement {
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
      --mt-30: 30px;
      --p-20: 10px;
      --mt-100: 100px;
      --mb-100: 100px;
    }
    #text-dr-who {
      position: relative;
      width: 80%;
      margin: 0 auto;
      padding: var(--p-20) var(--p-20);
      text-align: center;
      margin-top: var(--mt-100);
      margin-bottom: var(--mb-100);
      border: 1px solid var(--gray);
    }
    #text-dr-who::before,
    #text-dr-who::after {
      height: 30px;
      width: 40px;
      content: '';
      position: absolute;
      background-image: url(${ComillasSvg});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border: none;
    }
    .who {
      right: 0;
      top: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      position:absolute;
      border-right: 1px solid var(--gray);
      border-left: 1px solid var(--gray);
      border-bottom: 1px solid var(--gray);
      padding: 5px 30px;
    }
    #text-dr-who::before {
      top: -15px;
      left: 30px;
    }
    #text-dr-who::after {
      bottom: -15px;
      right: 30px;
    }
    .white {
      color: var(--white);
    }
    @media(max-width: 800px) {
      h2 {
        font-size: 1.375em;
      }
    }
    @media(max-width: 500px) {
      h2 {
        font-size: 1em;
      }
      #text-dr-who  {
        width: auto;
      }
    }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${TextDrWho.styles}</style>
        <div id="text-dr-who" class="white">
          <h2>With great power comes great electricity bill</h2>
          <div class="who"> 
            <h2> - Dr.Who </h2>
          </div>
        </div>
      `;
  }
}

customElements.define('text-dr-who-component', TextDrWho);
