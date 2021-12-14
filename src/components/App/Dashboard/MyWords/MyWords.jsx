import { React, useState, useEffect } from 'react';
import './MyWords.css';
import { collection, getDocs } from "firebase/firestore";
import WordsCouple from './WordsCouple/WordsCouple';

export default function MyWords(props) {
  const initialFirebaseData = [];
  const [firebaseData, setFirebaseData] = useState(initialFirebaseData);
  useEffect(getDataFromFirebase, [])
  function getDataFromFirebase() {
    getDocs(collection(props.firebase, "users", "user", "appendedwords"))
      .then(collection => {
        setFirebaseData(collection.docs);
        console.log("Data request success");
        console.log((collection.docs))
      })
  }
  return (
    <div className="MyWords">
      < div className="MyWords__couples">
        {firebaseData.length !== 0
          ? firebaseData.map(x =>
            <WordsCouple key={x.data().word} word={x.data().word} translate={x.data().translate} />)
          : "Запросите данные"}
      </div>
    </div >
  )
}