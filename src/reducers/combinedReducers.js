import { combineReducers } from 'redux';
import getWordsFromTranslatorAPI from './getWordsFromTranslatorAPI';
import getWordsFromFirebaseReducer from './getWordsFromFirebaseReducer';
import getUserStatistics from './getUserStatistics';

const combinedReducers = combineReducers({
  wordsFromFirebase: getWordsFromFirebaseReducer,
  wordsFromTranslatorAPI: getWordsFromTranslatorAPI,
  userStatistics: getUserStatistics
})

export default combinedReducers