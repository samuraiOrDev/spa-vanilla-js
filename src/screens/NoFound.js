import '../components/Link';

class NotFoundPage extends HTMLElement {
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
      
    }
    .not-found {
      text-align: center;
      color: #495057;
      padding: 20px 20px;
    }

    h1 {
      font-size: 8em;
      margin: 0;
      color: #e44d26;
    }

    p {
      margin-top: 0.5em;
      font-size: 2em;
      color: #6c757d;
    }

    a {
      text-decoration: none;
      color: #007bff;
      font-weight: bold;
    }

    a:hover {
      text-decoration: underline;
    }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${NotFoundPage.styles}</style>
      <div class="not-found">
        <h1>404</h1>
        <p>Oops! The page you are looking for might be in another castle.</p>
        <p>Go back <link-component to='/' title='Home' ></link-component></p>
      </div>
      `;
  }
}

customElements.define('not-found-page', NotFoundPage);
