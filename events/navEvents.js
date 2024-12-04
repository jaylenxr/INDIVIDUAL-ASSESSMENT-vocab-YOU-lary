import showVocabCards from '../pages/vocab';
import { getVocab, getApple, getMicrosoft } from '../api/vocabData';
/* eslint-disable  brace-style, no-spaced-func, func-call-spacing, quotes, semi */
const navEvents = (user) => {
  document.querySelector('#my-cards').addEventListener('click', () => {
    getVocab(user.uid).then(showVocabCards);
  });

  document.querySelector('#apple').addEventListener('click', () => {
    getApple(user.uid).then(showVocabCards);
  });

  document.querySelector('#microsoft').addEventListener('click', () => {
    getMicrosoft(user.uid).then(showVocabCards);
  });
};

export default navEvents;
