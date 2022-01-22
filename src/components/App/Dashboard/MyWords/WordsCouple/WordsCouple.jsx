import { React } from 'react';
import './WordsCouple.css';
import toUpperCase from './../../../../functionsForComponents/toUpperCase';
import { AiFillCloseCircle } from "react-icons/ai";
import { getDocs, doc, setDoc, collection, deleteDoc } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';

export default function WordsCouple(props) {

  const dispatch = useDispatch()
  const firebase = useSelector(state => state.firebase.firebase)
  const dataFromFirebase = useSelector(state => state.wordsFromFirebase.data)

  async function some(translatedWord) {
    let translatedWordsFromFirebase = dataFromFirebase.filter(x => x.data().word == props.word)[0].data().translate
    if (translatedWordsFromFirebase.length !== 1) {
      await setDoc(doc(firebase, "users", "user", "appendedwords", props.word), {
        word: props.word,
        translate: translatedWordsFromFirebase.filter(word => word !== translatedWord)
      })
      getDocs(collection(firebase, "users", "user", "appendedwords"))
        .then(collection => {
          dispatch({ type: "ADD_DATA_FROM_FIREBASE", data: collection.docs });
        })
    }
    else {
      await deleteDoc(doc(firebase, "users", "user", "appendedwords", props.word));
      getDocs(collection(firebase, "users", "user", "appendedwords"))
        .then(collection => {
          dispatch({ type: "ADD_DATA_FROM_FIREBASE", data: collection.docs });
        })
    }
  }
  return (
    <div className="WordsCouple">
      <div className='WordsCouple-word'>{toUpperCase(props.word)}</div>
      <div className='WordsCouple-translates'>
        {Array.isArray(props.translate)
          ? props.translate.map(translatedWord =>
            <div key={translatedWord} className='WordsCouple-translates-translate'>
              <div>{toUpperCase(translatedWord)}</div><AiFillCloseCircle onMouseDown={() => some(translatedWord)} className='WordsCouple-icon' style={{ marginLeft: '10px' }} />
            </div>
          )
          : toUpperCase(props.translate)}
      </div>
    </div >
  )
}