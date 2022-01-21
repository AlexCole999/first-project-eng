import { React } from 'react';
import './WordsCouple.css';
import toUpperCase from './../../../../functionsForComponents/toUpperCase';
import { AiFillCloseCircle } from "react-icons/ai";
import { getDoc, doc } from 'firebase/firestore';
import { useSelector } from 'react-redux';

export default function WordsCouple(props) {

  const firebase = useSelector(state => state.firebase.firebase)

  async function some(x) {
    let a = await getDoc(doc(firebase, "users", "user", "appendedwords", props.word));
    console.log(a.data().translate)
    console.log(x)
  }
  return (
    <div className="WordsCouple">
      <div className='WordsCouple-word'>{toUpperCase(props.word)}</div>
      <div className='WordsCouple-translates'>
        {Array.isArray(props.translate)
          ? props.translate.map(x =>
            <div key={x} className='WordsCouple-translates-translate'>
              <div>{toUpperCase(x)}</div><AiFillCloseCircle onClick={() => some(x)} className='WordsCouple-icon' style={{ marginLeft: '10px' }} />
            </div>
          )
          : toUpperCase(props.translate)}
      </div>
    </div>
  )
}