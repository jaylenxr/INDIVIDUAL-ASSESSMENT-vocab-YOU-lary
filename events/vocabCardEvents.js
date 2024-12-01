import { getVocab, getSingleVocab, deleteVocab } from '../api/vocabData';
import newVocabForm from '../components/forms/addNewVocab';
import showVocabCards from '../pages/vocab';

const vocabEvents = (user) => {
  document.querySelector('#store').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(firebaseKey).then(() => {
          getVocab(user).then(showVocabCards);
        });
      }
    }
    // CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => newVocabForm(vocabObj));
    }
  });
};

export default vocabEvents;
