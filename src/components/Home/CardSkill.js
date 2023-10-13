import '../Link';

class CardSkill extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['title', 'des'];
  }

  attributeChangedCallback(name) {
    // eslint-disable-next-line default-case
    switch (name) {
      case 'title':
      case 'des':
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
      --w-200: 200px;
    }
    .card {
      border: 1px solid var(--gray);
      transition: all 0.3s ease-out;
      width: var(--w-200);
      cursor: pointer;
    }
    .card:hover {
      transform: scale(1.02);
    }
    .card .content {
      
    }
    .gray {
      color: var(--gray);
      padding: 0px 10px;
      text-align: start;
    }
    .white {
      color: var(--white);
      padding: 0px 10px;
    }
    .card .content .title {
      border-bottom: 1px solid var(--gray);
      padding: 10px 10px;
    }
    .container-sub-title {
      width: 100%;
      display: flex;
      align-items: center;
      border-bottom: 1px solid var(--white);
    }
    `;
  }

  render() {
    const title = this.getAttribute('title');
    const des = this.getAttribute('des');

    this.shadowRoot.innerHTML = /* html */`
    <style>${CardSkill.styles}</style>
        <div class="card">
          <div class="content">
            <div class="sub-title">
              <div class="container-sub-title">
                <p class="white">${title}</p> 
              </div>
              <p class='gray'>${des}</p>
            </div>
          </div>
        </div>
      `;
  }
}

customElements.define('card-skill-component', CardSkill);
