import GitHubSvg from '../aseets/Github.svg';
import DiscordSvg from '../aseets/Discord.svg';
import VectorSvg from '../aseets/Vector.svg';

class SocialMedia extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Crear un Shadow DOM
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
          <div class="social-media">
            <img src=${GitHubSvg} title="LogoSvg" height="30" width="30" />
            <img src=${VectorSvg} title="LogoSvg" height="30" width="30" />
            <img src=${DiscordSvg} title="LogoSvg" height="30" width="30" />
          </div>
      `;
  }
}

customElements.define('social-media-component', SocialMedia);
