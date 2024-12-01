import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const newVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
<form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocab Word</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Vocab Word" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Card Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group" id="select-menu">
      <label for="category" class="category">Category</label>
       <select class="form-control" placeholder="Select Category" id="category" name="vocabCategory" value="${obj.category || ''}" required>
       <option value="">Select Category</option>
         <option value="Apple" ${obj.category === 'Apple' ? 'selected' : ''}>Apple</option>
         <option value="Microsoft" ${obj.category === 'Microsoft' ? 'selected' : ''}>Microsoft</option>
       </select>
      </div>
      <button type="submit" class="btn btn-primary">Add Card</button>
    </form>`;

  renderToDom('#form-container', domString);
};

export default newVocabForm;
