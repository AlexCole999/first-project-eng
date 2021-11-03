import React from 'react';
import './SearchedTranslate.css';
import toUpperCase from '../../../functionsForComponents/toUpperCase';
import { AiFillCheckCircle } from "react-icons/ai";

export default function SearchedTranslate(props) {
  return (
    <div className="SearchedTranslate">
      <div>
        <div className="SearchedTranslate__pos">
          {props.pos == "noun" ? "Существительное"
            : props.pos == "verb" ? "Глагол"
              : props.pos == "adjective" ? "Прилагательное"
                : props.pos == "pronoun" ? "Местоимение"
                  : props.pos == "adverb" ? "Наречие"
                    : props.pos == "preposition" ? "Предлог"
                      : props.pos == "foreign word" ? "Иностранное слово"
                        : props.pos == "participle" ? "Причастие"
                          : props.pos == "particle" ? "Частица"
                            : props.pos == "interjection" ? "Междометие"
                              : props.pos == "numeral" ? "Числительное"
                                : props.pos}
        </div>
        {props.translates.map(
          x =>
            <div className="translatedElement">
              <div>{toUpperCase(x.text)}</div>
              <AiFillCheckCircle
                style={{ color: "grey", width: "20px", height: '20px' }}
                onClick={(e) => { console.log(e.target.style.color); e.target.style.color = 'green' }} />
            </div>)}
      </div>
    </div>
  );
}
