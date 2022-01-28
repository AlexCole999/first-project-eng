import { React, useEffect } from 'react';
import './ProfileStatistic.css'
import { useDispatch, useSelector } from 'react-redux';
import { getDocs, collection } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function ProfileStatistic() {

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const dispatch = useDispatch()
  const firebase = useSelector(state => state.firebase.firebase)
  const words = useSelector(state => state.userStatistics.data.words)
  const translates = useSelector(state => state.userStatistics.data.translates)
  useEffect(getData, [])


  function signInWithGoogleAuth() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(credential)
        console.log(token)
        console.log(user)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
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
            <div>Имя аккаунта </div><div><b><i>somename</i></b></div>
          </div>
          <div className='statistic-item'>
            <div>Тип аккаунта</div><div><b><i>Google</i></b></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '18px', marginTop: '15px' }}>
            <div>Статистика слов</div>
          </div>
          <div className='statistic-item'>
            <div>Слов в словаре: </div><div><b><i>{words}</i></b></div>
          </div>
          <div className='statistic-item'>
            <div>Переводов слов: </div><div><b><i>{translates}</i></b></div>
          </div>
        </div>
        <div className='authButtonContainer'>
          <button
            className='authButton'
            onClick={signInWithGoogleAuth}>
            Войти через гугл-аккаунт
          </button>
        </div>
      </div>
    </div>
  )
}
