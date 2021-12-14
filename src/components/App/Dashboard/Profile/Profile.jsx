import { React, useState, useEffect } from 'react';
import './Profile.css';
import { collection, getDocs } from 'firebase/firestore';

export default function Profile(props) {

  const initialState = 'загрузка...'
  const [state, setstate] = useState(initialState)
  useEffect(getData, [])

  function getData() {
    getDocs(collection(props.firebase, "users", "user", "appendedwords"))
      .then(x => {
        setstate(x.docs.length); console.log(x)
      })
  }
  return (
    <div className="Profile">
      <div style={{ display: 'flex', justifyContent: 'center' }}><div>Статистика</div></div>
      <div>Слов в словаре: {state}</div>
    </div>
  )
}