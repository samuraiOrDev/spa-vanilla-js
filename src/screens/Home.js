import '../components/Home/HeroBanner';
import '../components/Home/TextDrWho';
import '../components/Home/Projects';

class Home extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
        <hero-banner-component></hero-banner-component>
        <text-dr-who-component></text-dr-who-component>
        <projects-component></projects-component>
      `;
  }
}

customElements.define('home-component', Home);
