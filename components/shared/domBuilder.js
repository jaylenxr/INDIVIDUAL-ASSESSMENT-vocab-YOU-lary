import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="store"></div>
  <div id="form-container"></div>
  <div id="logo"></div>`;

  renderToDom('#app', domString);
};
export default domBuilder;
