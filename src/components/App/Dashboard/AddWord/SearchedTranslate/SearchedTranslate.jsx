import React from 'react';
import './SearchedTranslate.css';
import toUpperCase from '../../../../functionsForComponents/toUpperCase';
import { AiFillCheckCircle } from "react-icons/ai";
import { doc, setDoc, getDoc } from 'firebase/firestore';

export default function SearchedTranslate(props) {
  const db = props.firebase;

  async function addNewWordToFirebase(tr, e) {
    let a = await getDoc(doc(db, "users", "user", "appendedwords", props.word));
    setDoc(doc(db, "users", "user", "appendedwords", props.word), {
      word: props.word,
      translate: a.data() == undefined ? [tr] : [...new Set([...a.data().translate, tr])]
    })
      .then(x => console.log(props.word, tr, 'added'))
      .then(x => {
        e.target.style.color === 'green'
          ? e.target.style.color = "grey"
          : e.target.style.color = 'green'
      });

  }

  ///ФУНКЦИЯ ДЛЯ ЗАПРОСА ДАННЫХ О СЛОВАХ НА СЕРВЕРЕ--->>>
  async function some() {
    console.log(props.wordsInBase)
  }
  ///<<<---ФУНКЦИЯ ДЛЯ ЗАПРОСА ДАННЫХ О СЛОВАХ НА СЕРВЕРЕ

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
                className={`AiFillCheckCircle ${props.wordsInBase.some(elem => elem == x.text) ? 'green' : ""}`}
                onMouseDown={(e) => {
                  addNewWordToFirebase(x.text, e);
                }} />
            </div>)}
      </div>
      <button onClick={some}></button>
    </div>
  );
}
