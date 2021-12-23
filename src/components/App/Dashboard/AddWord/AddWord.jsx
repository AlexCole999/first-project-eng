import React, { useState } from 'react';
import SearchedTranslate from './SearchedTranslate/SearchedTranslate';
import './AddWord.css';
import toUpperCase from '../../../functionsForComponents/toUpperCase';

export default function AddWord(props) {
  const [yandexData, setYandexData] = useState({ head: {}, def: [] });

  function yandexDictionaryRequest(input) {
    if (input) {
      fetch
        ('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=\dict.1.1.20210811T164421Z.dc92c34aa55f8bde.11d283af044e951db1e180d89d183eafd3dac943&lang=en-ru&text=' + input)
        .then(x => x.json())
        .then(x => {
          console.log("------------");
          console.log(x);
          setYandexData(x);
        }
        );

    }
    else setYandexData({ head: {}, def: [] });
  }
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '45px' }}><div style={{ fontSize: "32px", fontWeight: "bold" }}>Поиск слов</div></div>
      <div>Введите слово для поиска:</div>
      <div className="wordSearch">
        <input className="wordSearch__input"
          type="text"
          onChange={
            (e) => {
              yandexDictionaryRequest(e.target.value);
            }
          }
        />
        <div className="mainTranslate">
          {yandexData.code !== 502
            ? (yandexData.def.length ? `${toUpperCase(yandexData.def[0].tr[0].text)}` : "Нет в словаре")
            : "Нет в словаре"}
          <button style={{ borderRadius: '50%', height: '15px' }} onClick={() => console.log(yandexData)}></button>
        </div>
      </div>
      <hr />
      <div className="words">
        {yandexData.code !== 502  /* <<<---Обработка пробелов */
          ? (yandexData.def.length > 0 ? yandexData.def.map(x => <SearchedTranslate pos={x.pos} translates={x.tr} key={x.pos} word={x.text} firebase={props.firebase} />) : 'Других переводов не найдено')
          : 'Других переводов не найдено'}
      </div>
    </div>
  );
}
