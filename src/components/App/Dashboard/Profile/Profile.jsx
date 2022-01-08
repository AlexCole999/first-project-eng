import { React, useState, useEffect } from 'react';
import './Profile.css';
import { collection, getDocs } from 'firebase/firestore';

export default function Profile(props) {

  const initialState = 'загрузка...'
  const [vocabularyLength, setVocabularyLength] = useState(initialState)
  const [translatesLength, setTranslatesLength] = useState(initialState)
  useEffect(getData, [])

  function getData() {
    getDocs(collection(props.firebase, "users", "user", "appendedwords"))
      .then(x => {
        setVocabularyLength(x.docs.length);
        let count = 0;
        x.docs.forEach(x => count += x.data().translate.length);
        setTranslatesLength(count);
      })
  }

  return (
    <div className='Profile'>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '45px' }}><div style={{ fontSize: "32px", fontWeight: "bold" }}>Профиль</div></div>
      <div className="table-wrapper">
        <div className="Profile-table">
          <div className="statistic">
            <div style={{ display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '18px' }}>
              <div>Статистика слов</div>
            </div>
            <div className='statistic-item'>
              <div>Слов в словаре: </div><div><b>{vocabularyLength}</b></div>
            </div>
            <div className='statistic-item'>
              <div>Переводов слов: </div><div><b>{translatesLength}</b></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}