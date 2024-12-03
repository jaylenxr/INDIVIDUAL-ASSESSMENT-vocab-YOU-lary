import { getVocab, getApple, getMicrosoft } from '../api/vocabData';
import newVocabForm from '../components/forms/addNewVocab';
import showVocabCards from '../pages/vocab';
import clearDom from '../utils/clearDom';
import { signOut } from '../utils/auth';

const domEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    document.querySelector('#logout-button')
      .addEventListener('click', signOut);
    // this is user entry
    if (e.target.id.includes('create-entry')) {
      newVocabForm(user);
    }
    if (e.target.id.includes('logo')) {
      clearDom();
      getVocab(user).then((vocab) => showVocabCards(vocab));
    }
    if (e.target.id.includes('apple')) {
      clearDom();
      getApple(user).then((vocab) => showVocabCards(vocab));
    }
    if (e.target.id.includes('microsoft')) {
      clearDom();
      getMicrosoft(user).then((vocab) => showVocabCards(vocab));
    }
  });
};

export default domEvents;
