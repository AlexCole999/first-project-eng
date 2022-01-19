import { React, useState, useEffect } from 'react';
import './Profile.css';
import { collection, getDocs } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';

export default function Profile(props) {

  const dispatch = useDispatch()
  const words = useSelector(state => state.userStatistics.data.words)
  const translates = useSelector(state => state.userStatistics.data.translates)
  useEffect(getData, [])

  function getData() {
    getDocs(collection(props.firebase, "users", "user", "appendedwords"))
      .then(x => {
        let count = 0;
        x.docs.forEach(x => count += x.data().translate.length);
        dispatch({ type: "ADD_STATISTICS_DATA", words: x.docs.length, translates: count })
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
              <div>Слов в словаре: </div><div><b>{words}</b></div>
            </div>
            <div className='statistic-item'>
              <div>Переводов слов: </div><div><b>{translates}</b></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}