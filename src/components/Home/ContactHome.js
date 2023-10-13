/* eslint-disable object-curly-newline */
import '../Hash';

class Contact extends HTMLElement {
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
    #contact {
      height: 350px;
    }
    .contact-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 40px;
      margin-bottom: 40px;
    }
    .contact-title .title {  
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    .contact-title .title h2 {
      color: var(--white);
    }
    .contact-title .title .bar-primary {
      height: 1.5px;
      width: 450px;
      background: var(--primary)
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
    .contact-social {
      border: 1px solid var(--gray);
      padding: 20px 20px;
    }
    .contact-social  div {
      color: var(--white);
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    @media(max-width: 500px) {
      .img img {
        max-width: 320px;
      }
    }
    @media(max-width: 800px) {
      #contact .title .bar-primary {
        display: none;
      }
    }

    @media(max-width: 1130px) {
      #contact {
        height: 400px;
      }
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
    <style>${Contact.styles}</style>
        <section id="contact">
          <div class="contact-title">
            <div class="title">
                <h2><hash-component></hash-component>contacts</h2>
                <div class="bar-primary"></div>
            </div>
          </div>
          <div class='about-content'>
            <div class='text'>
              <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
              
            </div>
            <div class='contact-social'>
                <div>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.1641 1.65906C19.543 0.878258 17.8325 0.320987 16.0751 0.00113909C16.0592 -0.00167518 16.0428 0.000755409 16.0283 0.00809674C16.0137 0.0154381 16.0017 0.0273296 15.9938 0.0421361C15.7735 0.452106 15.5298 0.988347 15.3595 1.40816C13.4651 1.10643 11.5383 1.10643 9.64391 1.40816C9.45393 0.940495 9.23901 0.484433 9.00017 0.0421361C8.99216 0.0274917 8.9801 0.0157372 8.9656 0.00841949C8.9511 0.00110175 8.93482 -0.00143631 8.91892 0.00113909C7.16113 0.319276 5.45021 0.876835 3.82991 1.65906C3.81605 1.66461 3.80445 1.67504 3.7971 1.68858C0.556508 6.77057 -0.332545 11.7279 0.103388 16.623C0.10495 16.6459 0.119013 16.6689 0.1362 16.6836C2.02325 18.1507 4.13396 19.2708 6.37832 19.9962C6.39417 20.0014 6.4112 20.0013 6.42693 19.9957C6.44267 19.99 6.45629 19.9793 6.46582 19.965C6.94707 19.2763 7.37519 18.5498 7.74393 17.7856C7.75162 17.7699 7.75425 17.752 7.75143 17.7345C7.74862 17.7171 7.74051 17.7011 7.72831 17.6889C7.72023 17.6809 7.71065 17.6747 7.70018 17.6708C7.027 17.3993 6.37503 17.0731 5.7502 16.6951C5.73275 16.6847 5.71977 16.6677 5.71395 16.6476C5.70814 16.6274 5.70993 16.6057 5.71895 16.5869C5.72427 16.5747 5.73231 16.564 5.74239 16.5557C5.87364 16.4524 6.00489 16.3442 6.12989 16.236C6.14093 16.2266 6.15418 16.2206 6.16821 16.2186C6.18225 16.2166 6.19655 16.2186 6.20957 16.2245C10.3017 18.1858 14.7314 18.1858 18.7735 16.2245C18.787 16.2183 18.8018 16.2162 18.8164 16.2182C18.831 16.2202 18.8448 16.2264 18.8563 16.236C18.9813 16.3442 19.1126 16.4524 19.2438 16.5557C19.2544 16.5639 19.263 16.5747 19.2687 16.5872C19.2744 16.5996 19.277 16.6134 19.2764 16.6272C19.2758 16.641 19.2719 16.6544 19.2651 16.6663C19.2584 16.6781 19.2489 16.688 19.2376 16.6951C18.6142 17.0765 17.9614 17.4024 17.286 17.6692C17.2752 17.6733 17.2655 17.6798 17.2574 17.6883C17.2493 17.6968 17.243 17.7071 17.2391 17.7184C17.2355 17.7294 17.2341 17.741 17.2349 17.7525C17.2357 17.7641 17.2387 17.7754 17.2438 17.7856C17.6188 18.5482 18.0485 19.2763 18.5204 19.965C18.5299 19.9793 18.5435 19.99 18.5593 19.9957C18.575 20.0013 18.592 20.0014 18.6079 19.9962C20.856 19.2731 22.9701 18.1528 24.8594 16.6836C24.8688 16.6768 24.8767 16.6677 24.8824 16.6572C24.8881 16.6467 24.8914 16.635 24.8922 16.623C25.4141 10.9637 24.0188 6.04738 21.1954 1.69022C21.1925 1.68302 21.1883 1.67653 21.1829 1.67116C21.1775 1.66579 21.1711 1.66167 21.1641 1.65906ZM8.35486 13.6417C7.12206 13.6417 6.10801 12.4544 6.10801 10.9982C6.10801 9.54032 7.10331 8.35305 8.35486 8.35305C9.61579 8.35305 10.6205 9.55016 10.6017 10.9982C10.6017 12.4544 9.60641 13.6417 8.35486 13.6417ZM16.661 13.6417C15.4298 13.6417 14.4142 12.4544 14.4142 10.9982C14.4142 9.54032 15.4095 8.35305 16.661 8.35305C17.922 8.35305 18.9282 9.55016 18.9079 10.9982C18.9079 12.4544 17.922 13.6417 16.661 13.6417Z" fill="#ABB2BF"/>
                  </svg>
                  !Samuraio.or
                </div>
                <div>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.07187 9.20292C5.2168 8.57709 5.57307 8.01832 6.08232 7.6181C6.59158 7.21789 7.22365 6.99996 7.875 7H25.125C25.7764 6.99996 26.4084 7.21789 26.9177 7.6181C27.4269 8.01832 27.7832 8.57709 27.9281 9.20292L16.5 16.0865L5.07187 9.20292ZM5 10.8207V20.8847L13.3418 15.8442L5 10.8207ZM14.7189 16.6758L5.27456 22.3807C5.50791 22.8657 5.87619 23.2753 6.33656 23.5619C6.79693 23.8486 7.33044 24.0005 7.875 24H25.125C25.6695 24.0001 26.2028 23.8479 26.6629 23.561C27.123 23.274 27.491 22.8643 27.724 22.3793L18.2796 16.6744L16.5 17.7468L14.7189 16.6744V16.6758ZM19.6582 15.8457L28 20.8847V10.8207L19.6582 15.8442V15.8457Z" fill="#ABB2BF"/>
                  </svg>
                  samurai.dev.ordiales@gmail.com
                </div>
            </div>
          </div>
        </section>
      `;
  }
}

customElements.define('contact-home-component', Contact);
