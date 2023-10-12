import { root } from '../const';

const loadContentForRoute = async (route) => {
  const components = ['about-component', 'home-component', 'contact-component'];

  components.forEach((componentName) => {
    const existingComponent = root.querySelector(componentName);
    if (existingComponent) root.removeChild(existingComponent);
  });

  const templateId = `#${route.substring(1)}`;
  const template = document.querySelector(templateId);
  if (template) root.appendChild(template.content.cloneNode(true));
};

export { loadContentForRoute };
