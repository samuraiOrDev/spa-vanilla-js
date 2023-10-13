/* eslint-disable object-curly-newline */
import '../Hash';
import './CardSkill';
import SkillsSvg from '../../aseets/skills.svg';

class Skills extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get getSkills() {
    return [
      {
        title: 'Languages',
        des: 'TypeScript Lua Python JavaScript',
      },
      {
        title: 'DataBases',
        des: 'SQlite PostghresSQL Mongo',
      },
      {
        title: 'Tools',
        des: 'VSCode NewoVim Linux Figma Git',
      },
      {
        title: 'Other',
        des: 'HTML CSS EJS SCSS REST Jinja',
      },
      {
        title: 'Frameworks',
        des: 'React Vue Disnake FLask Express.js',
      },

    ];
  }

  static get styles() {
    return /* css */`
    :host {
    }
    .skills-title {
      margin-top: 40px;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .skills-title .title {  
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    .skills-title .title h2 {
      color: var(--white);
    }
    .skills-title .title .bar-primary {
      height: 1.5px;
      width: 350px;
      background: var(--primary)
    }
    .skills-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }
    .skills-card {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1rem;
    }
    @media(max-width: 700px) {
      .skills-card {
        display: grid;
        margin-top: 40px;
        grid-template-columns: 1fr 1fr;
      }
    }
    @media(max-width: 500px) {
      .skills-card {
        display: grid;
        grid-template-columns: 1fr ;
      }
    }
    @media(max-width: 800px) {
      #skills .title .bar-primary {
        display: none;
      }
    }
    @media(max-width: 1130px) {
      .skills-content { 
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${Skills.styles}</style>
        <section id="skills">
          <div class="skills-title">
            <div class="title">
                <h2><hash-component></hash-component>skills</h2>
                <div class="bar-primary"></div>
            </div>
          </div>
          <div class="skills-content">
            <div class="skills-img">
              <img src=${SkillsSvg} title='Habilidades' style="max-width: 320px;"/>
            </div>
            <div class="skills-card">
              ${Skills.getSkills.map(({ title, des }) => /* html */`
                <card-skill-component
                  title="${title}"
                  des="${des}"
                ></card-skill-component>`).join('')}
            </div>
          </div>
        </section>
      `;
  }
}

customElements.define('skills-component', Skills);
