/* eslint-disable object-curly-newline */
import '../Hash';

class HeaderProjects extends HTMLElement {
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
    .primary {
      color:var(--primary);
    }
    .white {
       color: var(--white);
    }
    .gray {
      color: var(--gray);
    }
    #project {
      margin-bottom: 80px;
    }
    .project-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 40px;
      margin-bottom: 40px;
    }
    .project-title .title {  
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }
    .project-title .title h2 {
      color: var(--white);
    }
    @media(max-width: 600px) {
      .container-project-social { 
        justify-content:center;
      }
    }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${HeaderProjects.styles}</style>
        <section id="project">
          <div class="project-title">
            <div class="title">
                <h2><span class='primary'>/</span>projects</h2>
                <span class='white'>List of my projects</span>
            </div>
          </div>
          </div>
        </section>
      `;
  }
}

customElements.define('header-component', HeaderProjects);
