import { React, useState } from 'react';
import './MyWords.css';
import { collection, getDocs } from "firebase/firestore";
import toUpperCase from './../../../functionsForComponents/toUpperCase';


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
      <button style={{}} onClick={getDataFromFirebase}>Запросить данные</button><br />

      <div className="MyWords__couples">
        {firebaseData.length !== 0
          ? firebaseData.map(x =>
            <div className="wordsCoupleAdded">
              <div>{toUpperCase(x.data().word)}</div>
              <div>{toUpperCase(x.data().translate)}</div>
            </div>
          )
          : "Запросите данные"}
      </div>

    </div>
  )
}