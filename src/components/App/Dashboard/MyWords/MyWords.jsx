import { React, useEffect } from 'react';
import './MyWords.css';
import { collection, getDocs } from "firebase/firestore";
import WordsCouple from './WordsCouple/WordsCouple';
import { useDispatch, useSelector } from 'react-redux';

export default function MyWords() {

  const dispatch = useDispatch();
  const firebase = useSelector(state => state.firebase.firebase)
  const dataFromFirebase = useSelector(state => state.wordsFromFirebase.data)
  useEffect(getDataFromFirebase, [])

  function getDataFromFirebase() {
    getDocs(collection(firebase, "users", "user", "appendedwords"))
      .then(collection => {
        dispatch({ type: "ADD_DATA_FROM_FIREBASE", data: collection.docs });
      })
  }

  return (
    <div className="MyWords">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '45px', flexDirection: 'column' }}>
        <div style={{ fontSize: "32px", fontWeight: "bold" }}>
          База слов
        </div>
        <div style={{ fontStyle: 'italic', fontSize: "15px" }}>
          быстрый поиск : ctrl + f
        </div>
      </div>
      < div className="MyWords__couples">
        {dataFromFirebase.length !== 0
          ? dataFromFirebase.map(x =>
            <WordsCouple key={x.data().word} word={x.data().word} translate={x.data().translate} />)
          : <b>Загрузка данных...</b>}
      </div>
    </div >
  )
}