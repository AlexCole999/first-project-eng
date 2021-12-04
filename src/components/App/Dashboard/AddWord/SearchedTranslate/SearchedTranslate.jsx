import React from 'react';
import './SearchedTranslate.css';
import toUpperCase from '../../../../functionsForComponents/toUpperCase';
import { AiFillCheckCircle } from "react-icons/ai";
import { doc, setDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

export default function SearchedTranslate(props) {

  const db = props.firebase;

  const addNewWordToFirebase = (tr, e) => {
    setDoc(doc(db, "users", "user", "appendedwords", props.word, "translates", tr), {
      word: props.word,
      translate: tr
    })
      .then(x => console.log(props.word, tr, 'added'))
      .then(x => {
        e.target.style.color === 'green'
          ? e.target.style.color = "grey"
          : e.target.style.color = 'green'
      });

  }

  return (
    <div className="SearchedTranslate">
      <div>
        <div className="SearchedTranslate__pos">
          {props.pos === "noun" ? "Существительное"
            : props.pos === "verb" ? "Глагол"
              : props.pos === "adjective" ? "Прилагательное"
                : props.pos === "pronoun" ? "Местоимение"
                  : props.pos === "adverb" ? "Наречие"
                    : props.pos === "preposition" ? "Предлог"
                      : props.pos === "foreign word" ? "Иностранное слово"
                        : props.pos === "participle" ? "Причастие"
                          : props.pos === "particle" ? "Частица"
                            : props.pos === "interjection" ? "Междометие"
                              : props.pos === "numeral" ? "Числительное"
                                : props.pos === "predicative" ? "Предикатив"
                                  : props.pos === "conjunction" ? "Союз"
                                    : props.pos === "parenthetic" ? "Вводное"
                                      : props.pos}

        </div>
        {props.translates.map(
          x =>
            <div className="translatedElement" key={x.text}>
              <div>{toUpperCase(x.text)}</div>
              <AiFillCheckCircle
                className="AiFillCheckCircle"
                onMouseDown={(e) => {
                  addNewWordToFirebase(x.text, e);
                }} />
            </div>)}
      </div>
    </div>
  );
}
