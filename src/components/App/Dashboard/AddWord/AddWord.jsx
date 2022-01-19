import React, { useEffect, useState } from 'react';
import SearchedTranslate from './SearchedTranslate/SearchedTranslate';
import './AddWord.css';
import toUpperCase from '../../../functionsForComponents/toUpperCase';
import { getDoc, doc } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';

export default function AddWord(props) {
  const dispatch = useDispatch();
  const dataFromTranslatorApi = useSelector(state => state.wordsFromTranslatorAPI.data ? state.wordsFromTranslatorAPI.data.def : [])
  const [wordsInBase, setWordsInBase] = useState([]);
  useEffect(yandexDictionaryRequest, [])

  async function some(input) {
    if (input) {
      let a = await getDoc(doc(props.firebase, "users", "user", "appendedwords", input));
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
        <input placeholder='Введите слово...' className="wordSearch__input"
          type="text"
          onChange={
            (e) => {
              some(e.target.value);
              yandexDictionaryRequest(e.target.value);
            }
          }
        />
        <div className="mainTranslate">
          {dataFromTranslatorApi.length ? `${toUpperCase(dataFromTranslatorApi[0].tr[0].text)}` : "Нет в словаре"}
          {/* <button style={{ borderRadius: '50%', height: '15px' }} onClick={() => console.log(dataFromTranslatorApi)}></button> */}
        </div>
        <div className="words">
          {dataFromTranslatorApi.length
            ? dataFromTranslatorApi.map(x => <SearchedTranslate
              pos={x.pos}
              translates={x.tr}
              key={x.pos}
              word={x.text}
              firebase={props.firebase}
              wordsInBase={wordsInBase} />)
            : <div style={{ fontStyle: 'italic', fontSize: '14px', fontWeight: '400' }}>Других переводов не найдено</div>}
        </div>
      </div>
    </div>
  );
}
