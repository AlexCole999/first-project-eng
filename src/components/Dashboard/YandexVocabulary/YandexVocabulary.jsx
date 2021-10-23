import React from 'react';
import SearchedTranslate from './SearchedTranslate/SearchedTranslate';
import './YandexVocabulary.css';
import toUpperCase from './../../functionsForComponents/toUpperCase';

export default function YandexVocabulary(props) {
  return (
    <div className="YandexVocabulary">
      Возможный перевод:
      <br />
      {props.data.code !== 502  /* <<<---Обработка пробелов */
        ? (props.data.def.length > 0 ? props.data.def[0].tr.map(x => <SearchedTranslate some={toUpperCase(x.text)} key={x.text} />) : 'Других переводов не найдено')
        : 'Других переводов не найдено'}
    </div>
  );
}
