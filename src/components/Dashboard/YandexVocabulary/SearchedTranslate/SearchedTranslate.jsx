import React from 'react';
import './SearchedTranslate.css';
import toUpperCase from '../../../functionsForComponents/toUpperCase';

// import { AiFillCheckCircle } from "react-icons/ai";

export default function SearchedTranslate(props) {
  return (
    <div className="SearchedTranslate">
      <div>
        <div className="SearchedTranslate__pos">
          {props.pos == "noun"
            ? "Существительное"
            : props.pos == "adjective"
              ? "Прилагательное"
              : props.pos == "verb"
                ? "Глагол"
                : props.pos == "pronoun"
                  ? "Местоимение"
                  : props.pos == "adverb"
                    ? "Наречие" : props.pos}
        </div>
        {props.translates.map(
          x =>
            <div>
              {toUpperCase(x.text)}
            </div>)}
      </div>
    </div>
  );
}
/* <AiFillCheckCircle
        style={{ color: "grey", width: "20px", height: '20px' }}
        onClick={() => console.log(1)} /> */