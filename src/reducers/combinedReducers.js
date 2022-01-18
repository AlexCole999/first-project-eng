import reducertwo from './reducertwo';
import getWordsFromFirebaseReducer from './getWordsFromFirebaseReducer';
import { combineReducers } from 'redux';

const combinedReducers = combineReducers({
  wordsFromFirebase: getWordsFromFirebaseReducer,
  second: reducertwo
})

export default combinedReducers