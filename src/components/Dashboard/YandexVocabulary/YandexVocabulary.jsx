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
        ? (props.data.def.length > 0 ? props.data.def.map(x => <SearchedTranslate translates={x.tr} />) : 'Других переводов не найдено')
        : 'Других переводов не найдено'}
    </div>
  );
}
