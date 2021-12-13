import { React, useState, useEffect } from 'react';
import './Profile.css';
import { collection, getDocs } from 'firebase/firestore';

export default function Profile(props) {
  const initialState = 'Загрузка данных'
  const [state, setstate] = useState(initialState)
  useEffect(getData)
  function getData() {
    getDocs(collection(props.firebase, "users", "user", "appendedwords"))
      .then(x => {
        setstate(x.docs.length); console.log(x)
      })
  }
  return (
    <div className="Profile">
      <button onClick={getData}>getData</button>
      <div>{state}</div>
    </div>
  )
}