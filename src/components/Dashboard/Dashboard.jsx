import React, { useState } from 'react'
import './Dashboard.css'
import YandexVocabulary from './YandexVocabulary/YandexVocabulary';
import toUpperCase from '../functionsForComponents/toUpperCase';

export default function Dashboard() {
  const [yandex, setyandex] = useState({ head: {}, def: [] });

  function yandexDictionaryRequest(input) {
    if (input) {
      fetch
        ('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=\dict.1.1.20210811T164421Z.dc92c34aa55f8bde.11d283af044e951db1e180d89d183eafd3dac943&lang=en-ru&text=' + input)
        .then(x => x.json())
        .then(x => {
          console.log("------------");
          console.log(x);
          setyandex(x);
        }
        );

    }
    else setyandex({ head: {}, def: [] });
  }
  return (
    <div className="Dashboard">
      <div className="Dashboard-content">
        <div className="wordSearch">
          <div>Введите слово для поиска:</div>
          <input className="wordSearch__input"
            type="text"
            onChange={
              (e) => {
                yandexDictionaryRequest(e.target.value);
              }
            }
          />
          <div className="mainTranslate">
            {yandex.code !== 502
              ? (yandex.def.length ? `${toUpperCase(yandex.def[0].tr[0].text)}` : "Нет в словаре")
              : "Нет в словаре"}
          </div>
          <br />
          <br />
          <YandexVocabulary data={yandex} />
        </div>
        <button onClick={() => console.log(yandex)}></button>
      </div>

    </div >
  )
}
