import { React, useState } from 'react';
import './MyWords.css';
import { collection, getDocs } from "firebase/firestore";
import WordsCouple from './WordsCouple/WordsCouple';

export default function MyWords(props) {
  const initialFirebaseData = [];
  const [firebaseData, setFirebaseData] = useState(initialFirebaseData);

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
      {!firebaseData.length
        ? <button style={{ width: "200px", height: "50px", marginBottom: "25px" }} onClick={getDataFromFirebase}><b style={{ fontSize: "14px" }}>Запросить данные</b>< br /></button>
        : " "}


      < div className="MyWords__couples">
        {firebaseData.length !== 0
          ? firebaseData.map(x =>
            <WordsCouple word={x.data().word} translate={x.data().translate} />)
          : "Запросите данные"}
      </div>
    </div >
  )
}