import getWordsFromTranslatorAPI from './getWordsFromTranslatorAPI';
import getWordsFromFirebaseReducer from './getWordsFromFirebaseReducer';
import { combineReducers } from 'redux';

const combinedReducers = combineReducers({
  wordsFromFirebase: getWordsFromFirebaseReducer,
  wordsFromTranslatorAPI: getWordsFromTranslatorAPI
})

export default combinedReducers