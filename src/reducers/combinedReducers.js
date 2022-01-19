import { combineReducers } from 'redux';
import getWordsFromTranslatorAPI from './getWordsFromTranslatorAPI';
import getWordsFromFirebaseReducer from './getWordsFromFirebaseReducer';
import getUserStatistics from './getUserStatistics';
import firebaseReducer from './firebaseReducer';

const combinedReducers = combineReducers({
  wordsFromFirebase: getWordsFromFirebaseReducer,
  wordsFromTranslatorAPI: getWordsFromTranslatorAPI,
  userStatistics: getUserStatistics,
  firebase: firebaseReducer
})

export default combinedReducers