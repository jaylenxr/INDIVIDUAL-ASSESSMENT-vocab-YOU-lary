import domBuilder from '../../components/shared/domBuilder';
import showVocabCards from '../../pages/vocab';
import { getVocab } from '../../api/vocabData';
import domEvents from '../../events/domEvents';
import formEvents from '../../events/formEvents';
import navEvents from '../../events/navEvents';
import logoutButton from '../../components/logoutButton';
import navBar from '../../components/shared/navigationBar';
import vocabEvents from '../../events/vocabCardEvents';
/* eslint-disable  brace-style, no-spaced-func, func-call-spacing, quotes, semi, indent */

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  navEvents(user);
  vocabEvents(user);
  logoutButton();
  getVocab(user.uid).then((vocab) => showVocabCards(vocab));
};

export default startApp;
