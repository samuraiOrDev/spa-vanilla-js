import '../Link';

class CardProject extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['subTitle', 'title', 'des', 'img'];
  }

  attributeChangedCallback(name) {
    // eslint-disable-next-line default-case
    switch (name) {
      case 'subTitle':
      case 'title':
      case 'des':
      case 'img':
        this.render();
        break;
    }
  }

  connectedCallback() {
    this.render();
  }

  static get styles() {
    return /* css */`
    :host {
    }
    .card {
      margin-top: 40px;
      border: 1px solid var(--gray);
      transition: all 0.3s ease-out;
      cursor: pointer;
      width: 340px;
    }
    .card:hover {
      transform: scale(1.02);
    }
    .card .content {
      
    }
    .gray {
      color: var(--gray);
    }
    .white {
      color: var(--white);
    }
    .card .content .title {
      border-bottom: 1px solid var(--gray);
      padding: 10px 10px;
    }
    .card .content .sub-title { 
      padding: 10px 10px;
    }
    .card .content .buttons {
      padding: 10px 10px;
    }
    .card .content .buttons button {
      background: transparent;
      border: none;
      padding: 10px 10px;
      color: var(--white);
      border: 1px solid var(--gray);
    }
    .card .content .buttons button:first-child {
      border: 1px solid var(--primary);
    }
    `;
  }

  render() {
    const subTitle = this.getAttribute('subTitle');
    const title = this.getAttribute('title');
    const des = this.getAttribute('des');
    const img = this.getAttribute('img');

    this.shadowRoot.innerHTML = /* html */`
    <style>${CardProject.styles}</style>
    ${img ? (/* html */`
        <div class="card">
          <div class="img">
            <img src=${img}  title=${title} style="width: 340px;"/>
          </div>
          <div class="content">
            <div class="title">
              <span class="gray">${subTitle}</span>
            </div>
            <div class="sub-title">
              <p class="white">${title}</p>
              <span class='gray'>${des}</span>
            </div>
            <div class="buttons">
              <button>Live</button>
              <button>Cached</button>
            </div>
          </div>
        </div>`) : (/* html */ `
          <div class="card">
            <div class="content">
              <div class="title">
                <span class="gray">${subTitle}</span>
              </div>
              <div class="sub-title">
                <p class="white">${title}</p>
                <span class='gray'>${des}</span>
              </div>
              <div class="buttons">
                <button>Github</button>
              </div>
            </div>
          </div>`)}
      `;
  }
}

customElements.define('card-project-component', CardProject);
