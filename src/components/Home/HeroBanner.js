import ImgHeroBanner from '../../aseets/img/hero-banner.png';

class HeroBanner extends HTMLElement {
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
      --mt-30: 30px;
    }
    #hero-banner {
      margin-top: var(--mt-30);
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    .text-content h1 {
      color: var(--white);
      font-size: 42px;
    }
    .primary {
      color: var(--primary);
    }
    .gray {
        color: var(--gray);
    }
    button {
      padding: 10px 10px;
      background: transparent;
      border: none;
      border: 1px solid var(--primary);
      font-weight: bold;
      color: var(--white);
    }
    .text-img-block {
      height: 25px;
      width: 25px;
      background: var(--primary);
    }
    .text-img {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: var(--gray);
      border: 1px solid var(--gray);
      gap: 1rem;
      padding: 5px 5px;
    }
    @media(max-width: 900px) {
      #hero-banner {
        flex-direction: column;
        align-center: center;
        justify-content: center;
      }
      #hero-banner .text-content {
        text-align: center;
      }
    }
    @media(max-width: 500px) {
      #hero-banner .img-content img {
        width: 320px;
      }
    }
    @media(max-width: 400px) {
      .text-img-block { 
        display: none;
      }
    }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${HeroBanner.styles}</style>
        <section id="hero-banner">
          <div class="text-content"> 
              <h1>Samuraior.dev is a <span class="primary">Developer FullStack</span> and <span class="primary">Physical</h1>
              <p class="gray">He crafts responsive websites where technologies meet creativity</p>
              <button class="button">Contact me!!!</button>
          </div>
          <div class="img-content">
            <img src=${ImgHeroBanner} title='Hero Banner' />
            <div class="text-img">
              <div class="text-img-block"></div>
              Currenly working on <span class="primary">Portfolio</span>
            </div>
          </div>
        </section>
      `;
  }
}

customElements.define('hero-banner-component', HeroBanner);
