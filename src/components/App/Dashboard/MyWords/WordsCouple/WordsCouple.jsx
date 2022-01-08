import { React } from 'react';
import './WordsCouple.css';
import toUpperCase from './../../../../functionsForComponents/toUpperCase';
import { AiFillCloseCircle } from "react-icons/ai";

export default function WordsCouple(props) {
  return (
    <div className="WordsCouple">
      <div className='WordsCouple-word'>{toUpperCase(props.word)}</div>
      <div className='WordsCouple-translates'>
        {Array.isArray(props.translate)
          ? props.translate.map(x =>
            <div key={x} className='WordsCouple-translates-translate'>
              <div>{toUpperCase(x)}</div><AiFillCloseCircle className='WordsCouple-icon' style={{ marginLeft: '5px' }} />
            </div>
          )
          : toUpperCase(props.translate)}
      </div>
    </div>
  )
}