/* eslint-disable object-curly-newline */
import '../Hash';
import AboutMePng from '../../aseets/img/about-me.png';

class AboutMe extends HTMLElement {
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
    .about-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 40px;
    }
    .about-title .title {  
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }
    .about-title .title h2 {
      color: var(--white);
    }
    .about-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8rem;
    }
    .about-content .text {
      color: var(--gray);
    }
    .about-content button {
      background: transparent;
      border: none;
      border: 1px solid var(--primary);
      padding: 10px 10px;
      font-size: 18px;
      font-weight: bold;
      color: var(--white);

    }
    @media(max-width: 500px) {
      .img img {
        max-width: 320px;
      }
    }
    @media(max-width: 800px) {
      #about .title .bar-primary {
        display: none;
      }
    }

    @media(max-width: 1130px) {
      .about-content { 
        flex-direction: column;
        margin: 0 auto;
        gap: 0rem;
      }
      .about-content .text {
        text-align: center;
        margin-bottom: 30px;
      }
    }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${AboutMe.styles}</style>
        <section id="about">
          <div class="about-title">
            <div class="title">
                <h2><span class='primary'>/</span>about-me</h2>
                <span class='white'>Who am i?</span>
            </div>
          </div>
          <div class='about-content'>
            <div class='text'>
              <p>Hello, i’m Elias!</p>
              <p>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </p>
              <p>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
            </div>
            <div class='img'>
              <img src=${AboutMePng} title='About me' />
            </div>
          </div>
        </section>
      `;
  }
}

customElements.define('about-me-contact-component', AboutMe);
