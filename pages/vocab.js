import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const showVocabCards = (array) => {
  clearDom();
  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;" id="vocabStyle">
      <div class="card-body" id="cardBody">
        <h5 class="card-title" id="cardTitle">${item.title}</h5>
        <h6 class="card-subtitle" id="tech-category">${item.category}</h6>
        <p>${item.description}</p>
        <b class="btn1" id="edit-vocab--${item.firebaseKey}">Edit</b>
        <b class="btn2" id="delete-vocab--${item.firebaseKey}">Delete</b>
      </div>
    </div>
    `;
  });
  renderToDom('#store', domString);
};

export default showVocabCards;
