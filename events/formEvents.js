import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import showVocabCards from '../pages/vocab';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCAB CARD
    if (e.target.id.includes('submit-card')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        category: document.querySelector('#category').value,
        uid: user.uid
      };
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocabCards);
        });
      });
    }

    // CLICK EVENT FOR EDITING A VOCAB CARD
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        category: document.querySelector('#category').value,
        firebaseKey,
      };
      updateVocab(payload).then(() => {
        getVocab(user.uid).then(showVocabCards);
      });
    }
  });
};

export default formEvents;
