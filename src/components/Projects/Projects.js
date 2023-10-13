/* eslint-disable object-curly-newline */
import '../Hash';
import ChertNodes from '../../aseets/img/chertnodes.jpg';
import ProtectX from '../../aseets/img/protectx.png';
import Kahoot from '../../aseets/img/kahoot.png';
import Gato from '../../aseets/img/gato.png';
import Portfolio from '../../aseets/img/port.png';
import '../Home/CardProject';

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
        subTitle: 'React Express Node.js Python Flask',
        title: 'ProtectX',
        des: 'Discord anti-crash bot',
        img: ProtectX,
      },
      {
        subTitle: 'CSS Express Node.js',
        title: 'Kahoot Answers Viwer',
        des: 'Get answers to your kahoot quiz',
        img: Kahoot,
      },
      {
        subTitle: 'HTML CSS JS',
        title: 'Kotik Bot',
        des: 'Multi-functional discord bot',
        img: Gato,
      },
      {
        subTitle: 'VUE TS Less',
        title: 'Portfolio',
        des: 'You are using it ',
        img: Portfolio,
      },
    ];
  }

  static get getSmallProjects() {
    return [
      {
        subTitle: 'Discorid.js TS JS',
        title: 'Bot boilerplate',
        des: 'Start creating scalable discord.js bot with typescript in seconds',
      },
      {
        subTitle: 'VUE CSS JS',
        title: 'My blog',
        des: 'Front-end of my future blog website written in vue',
      },
      {
        subTitle: 'Figma',
        title: 'Chess pro',
        des: 'Figma landing page about service for viewing chess tournaments',
      },
      {
        subTitle: 'Figma',
        title: 'Crash protect website',
        des: 'Figma template for website about anti-raid, anti-crash discord bot',
      },
      {
        subTitle: 'HTML CSS',
        title: 'CSS expirements',
        des: 'Collection of my different little projects in css',
      },
      {
        subTitle: 'Lyua NeoVim',
        title: 'Web Dev nvim config',
        des: 'Config for neovim perfect for web developer',
      },
    ];
  }

  static get styles() {
    return /* css */`
    :host {
    }
    .projects-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .projects-title .title {  
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    .projects-title .title h2 {
      color: var(--white);
    }
    .projects-title .title .bar-primary {
      height: 1.5px;
      width: 450px;
      background: var(--primary)
    }
    .container-card {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem
    }
    
    @media(max-width: 1130px) {
      .container-card { 
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: 340px;
      }
    }
    @media(max-width: 800px) {
      .container-card { 
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 auto;        
        max-width: 340px;
      }
    }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${Projects.styles}</style>
        <section id="projects">
          <div class="projects-title">
            <div class="title">
                <h2><hash-component></hash-component>complete-apps</h2>
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
          <div class="projects-title" style="margin-top: 40px;">
            <div class="title">
                <h2><hash-component></hash-component>small-projects</h2>
            </div>
          </div>
          <div class="container-card" style="margin-bottom: 80px;">
            ${Projects.getSmallProjects.map(({ subTitle, title, des }) => /* html */`
              <card-project-component 
                subTitle="${subTitle}"
                title="${title}"
                des="${des}"
                
              ></card-project-component>`).join('')}
          </div>
        </section>
      `;
  }
}

customElements.define('project-screens-component', Projects);
