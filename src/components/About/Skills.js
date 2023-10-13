/* eslint-disable object-curly-newline */
import '../Hash';
import '../Home/CardSkill';

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
      {
        title: 'DevOps',
        des: 'Docker Kubernetes Jenkins AWS',
      },
      {
        title: 'Design',
        des: 'Sketch AdobeXD Canva InVision',
      },
      {
        title: 'Backend',
        des: 'Node.js Django Ruby on Rails ASP.NET',
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
    .skills-card {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 60px;
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
            </div>
          </div>
          <div class="skills-card">
            ${Skills.getSkills.map(({ title, des }) => /* html */`
              <card-skill-component
                title="${title}"
                des="${des}"
              ></card-skill-component>`).join('')}
          </div>
          
        </section>
      `;
  }
}

customElements.define('skills-about-me-component', Skills);
