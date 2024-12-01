import showVocabCards from '../pages/vocab';
import { getApple, getMicrosoft, getVocab } from '../api/vocabData';

const navEvents = (user) => {
  document.querySelector('#my-cards').addEventListener('click', () => {
    getVocab().then(showVocabCards);
  });

  document.querySelector('#apple').addEventListener('click', () => {
    getApple(user.uid).then(showVocabCards);
  });

  document.querySelector('#microsoft').addEventListener('click', () => {
    getMicrosoft(user.uid).then(showVocabCards);
  });
};

export default navEvents;
