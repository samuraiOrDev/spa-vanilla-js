import '../components/Home/HeroBanner';
import '../components/Home/TextDrWho';
import '../components/Home/Projects';
import '../components/Home/Skills';
import '../components/Home/AboutMe';
import '../components/Home/ContactHome';

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
        <skills-component></skills-component>
        <about-me-component></about-me-component>
        <contact-home-component></contact-home-component>
      `;
  }
}

customElements.define('home-component', Home);
