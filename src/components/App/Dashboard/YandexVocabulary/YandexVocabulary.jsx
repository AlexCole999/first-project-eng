import React, { useState } from 'react';
import SearchedTranslate from './SearchedTranslate/SearchedTranslate';
import './YandexVocabulary.css';
import toUpperCase from '../../../functionsForComponents/toUpperCase';

export default function YandexVocabulary(props) {
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
    <div>
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
          {yandex.code !== 502
            ? (yandex.def.length ? `${toUpperCase(yandex.def[0].tr[0].text)}` : "Нет в словаре")
            : "Нет в словаре"}
        </div>
      </div>
      <hr />
      <div className="YandexVocabulary">
        {yandex.code !== 502  /* <<<---Обработка пробелов */
          ? (yandex.def.length > 0 ? yandex.def.map(x => <SearchedTranslate pos={x.pos} translates={x.tr} key={x.pos} />) : 'Других переводов не найдено')
          : 'Других переводов не найдено'}
      </div>
    </div>
  );
}
