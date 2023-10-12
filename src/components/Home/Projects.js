/* eslint-disable object-curly-newline */
import '../Hash';
import ViewAllSVG from '../../aseets/View-all.svg';
import ChertNodes from '../../aseets/img/chertnodes.jpg';
import ProtectX from '../../aseets/img/protectx.png';
import Kahoot from '../../aseets/img/kahoot.png';
import './CardProject';

class Projects extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get getProjects() {
    return [
      {
        subTitle: 'HTML SCSS Python Flask',
        title: 'CherNode',
        des: 'Minecraft servers hosting',
        img: ChertNodes,
      },
      {
        subTitle: 'React Express Discord.js Node.js HTML Scss Python Flask',
        title: 'ProtectX',
        des: 'Discord anti-crash bot',
        img: ProtectX,
      }, {
        subTitle: 'CSS Express Node.js',
        title: 'Kahoot Answers Viwer',
        des: 'Get answers to your kahoot quiz',
        img: Kahoot,
      },
    ];
  }

  static get styles() {
    return /* css */`
    :host {
    }
    #projects-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    #projects-title .title {  
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    #projects-title .title h2 {
      color: var(--white);
    }
    #projects-title .title .bar-primary {
      height: 1.5px;
      width: 450px;
      background: var(--primary)
    }
    .container-card {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem
    }
    @media(max-width: 800px) {
      #projects .title .bar-primary {
        display: none;
      }
    }
    @media(max-width: 1130px) {
      .container-card { 
        flex-direction: column;
        max-width: 340px;
        margin: 0 auto;
        gap: 0 rem;
      }
    }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${Projects.styles}</style>
        <section id="projects">
          <div id="projects-title">
            <div class="title">
                <h2><hash-component></hash-component>projects</h2>
                <div class="bar-primary"></div>
            </div>
            <div class="viewn-alls">
              <img src=${ViewAllSVG} title="All projects" />
            </div>
          </div>
          <div class="container-card">
            ${Projects.getProjects.map(({ subTitle, title, des, img }) => /* html */`
              <card-project-component 
                subTitle="${subTitle}"
                title="${title}"
                des="${des}"
                img="${img}"
              ></card-project-component>`).join('')}
          </div>
        </section>
      `;
  }
}

customElements.define('projects-component', Projects);
