import { root } from '../const';

const loadContentForRoute = async (route) => {
  let routeVariables = route;
  const components = ['about-component', 'home-component', 'contact-component', 'projects-screens-component', 'not-found-page'];
  const listRoutes = ['/', '/about', '/contact', '/projects'];
  components.forEach((componentName) => {
    const existingComponent = root.querySelector(componentName);
    if (existingComponent) root.removeChild(existingComponent);
  });
  if (!listRoutes.includes(route)) {
    routeVariables = '/wrong';
  }
  if (route === '/') { routeVariables = '/home'; }

  const templateId = `#${routeVariables.substring(1)}`;
  const template = document.querySelector(templateId);
  if (template) root.appendChild(template.content.cloneNode(true));
};

export { loadContentForRoute };
