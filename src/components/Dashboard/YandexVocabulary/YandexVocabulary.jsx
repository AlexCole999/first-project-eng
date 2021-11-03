import React from 'react';
import SearchedTranslate from './SearchedTranslate/SearchedTranslate';
import './YandexVocabulary.css';

export default function YandexVocabulary(props) {
  return (
    <div className="YandexVocabulary">
      {props.data.code !== 502  /* <<<---Обработка пробелов */
        ? (props.data.def.length > 0 ? props.data.def.map(x => <SearchedTranslate pos={x.pos} translates={x.tr} />) : 'Других переводов не найдено')
        : 'Других переводов не найдено'}
    </div>
  );
}
