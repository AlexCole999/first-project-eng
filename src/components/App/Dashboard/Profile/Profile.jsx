import { React, useState, useEffect } from 'react';
import './Profile.css';
import { collection, getDocs } from 'firebase/firestore';

export default function Profile(props) {

  const initialState = 'загрузка...'
  const [vocabularyLength, setVocabularyLength] = useState(initialState)
  useEffect(getData, [])

  function getData() {
    getDocs(collection(props.firebase, "users", "user", "appendedwords"))
      .then(x => {
        setVocabularyLength(x.docs.length); console.log(x)
      })
  }
  return (
    <div className="Profile">
      <div className="statistic">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>Статистика</div>
        </div>
        <div className='statistic-item'>
          <div>Слов в словаре: </div><div><b>{vocabularyLength}</b></div>
        </div>
      </div>
    </div>
  )
}