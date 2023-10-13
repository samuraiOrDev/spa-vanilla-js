import '../components/Contact/ContactHome';
import '../components/Projects/HeaderProjects';
import '../components/Projects/Projects';

class Projects extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <header-component></header-component>
    <project-screens-component></project-screens-component>
      `;
  }
}

customElements.define('projects-screens-component', Projects);
