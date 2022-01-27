import { React, useEffect } from 'react';
import './ProfileStatistic.css'
import { useDispatch, useSelector } from 'react-redux';
import { getDocs, collection } from 'firebase/firestore';

export default function ProfileStatistic() {

  const dispatch = useDispatch()
  const firebase = useSelector(state => state.firebase.firebase)
  const words = useSelector(state => state.userStatistics.data.words)
  const translates = useSelector(state => state.userStatistics.data.translates)
  useEffect(getData, [])

  function getData() {
    getDocs(collection(firebase, "users", "user", "appendedwords"))
      .then(x => {
        let count = 0;
        x.docs.forEach(x => count += x.data().translate.length);
        dispatch({ type: "ADD_STATISTICS_DATA", words: x.docs.length, translates: count })
      })
  }
  return (
    <div className="table-wrapper">
      <div className="Profile-table">
        <div className="statistic">
          <div style={{ display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '18px' }}>
            <div>Аккаунт</div>
          </div>
          <div className='statistic-item'>
            <div>Имя аккаунта </div><div><b>somename</b></div>
          </div>
          <div className='statistic-item'>
            <div>Тип аккаунта</div><div><b>google\facebook\github</b></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '18px', marginTop: '15px' }}>
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
  )
}
