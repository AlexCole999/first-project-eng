import React, { useEffect, useState } from 'react';
import SearchedTranslate from './SearchedTranslate/SearchedTranslate';
import './AddWord.css';
import toUpperCase from '../../../functionsForComponents/toUpperCase';
import { getDoc, doc } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';

export default function AddWord() {

  const dispatch = useDispatch();
  const firebase = useSelector(state => state.firebase.firebase)
  const dataFromTranslatorApi = useSelector(state => state.wordsFromTranslatorAPI.data ? state.wordsFromTranslatorAPI.data.def : [])
  const [inputState, setInputState] = useState("");
  const [wordsInBase, setWordsInBase] = useState([]);
  useEffect(yandexDictionaryRequest, [])

  async function checkAppendedWordsInFirebase(input) {
    if (input) {
      let a = await getDoc(doc(firebase, "users", "user", "appendedwords", input));
      a.data() !== undefined ? setWordsInBase(a.data().translate) : setWordsInBase([]);
    }
    else setWordsInBase([])
  }

  function yandexDictionaryRequest(input) {
    if (input) {
      fetch
        ('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=\dict.1.1.20210811T164421Z.dc92c34aa55f8bde.11d283af044e951db1e180d89d183eafd3dac943&lang=en-ru&text=' + input)
        .then(x => x.json())
        .then(x => {
          dispatch({ type: "ADD_DATA_FROM_TRANSLATORAPI", data: x })
        });
    }
    else {
      dispatch({ type: "ADD_DATA_FROM_TRANSLATORAPI", data: { def: [] } });
    };
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '45px' }}><div style={{ fontSize: "32px", fontWeight: "bold" }}>Поиск слов</div></div>
      <div className="wordSearch">
        <input placeholder='Введите слово...' className={inputState.length ? `wordSearch__input pausedAnimation` : `wordSearch__input runningAnimation`}
          type="text"
          onChange={
            (e) => {
              checkAppendedWordsInFirebase(e.target.value);
              yandexDictionaryRequest(e.target.value);
              setInputState(e.target.value);
            }
          }
          onKeyDown={(e) =>
            e.key == "Enter" ? console.log("enter") : console.log("not enter")}
        />
        <div className="mainTranslate">
          {dataFromTranslatorApi.length ? `${toUpperCase(dataFromTranslatorApi[0].tr[0].text)}` : "Нет в словаре"}
        </div>
        <div className="words">
          {dataFromTranslatorApi.length
            ? dataFromTranslatorApi.map(x => <SearchedTranslate
              pos={x.pos}
              translates={x.tr}
              key={x.pos}
              word={x.text}
              wordsInBase={wordsInBase} />)
            : <div style={{ fontStyle: 'italic', fontSize: '14px', fontWeight: '400' }}>Других переводов не найдено</div>}
        </div>
      </div>
    </div>
  );
}
