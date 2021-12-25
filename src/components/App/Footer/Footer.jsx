import React from 'react'
import './Footer.css'
import { AiFillPhone } from 'react-icons/ai'
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="Footer">
        <div className="Footer-word">
          <div style={{ float: 'right' }}> Test Single Page Application</div><br />
          <div style={{ float: 'right' }}> developed by Leonid S.</div><br />
          <div style={{ float: 'right', display: 'flex', alignItems: 'center' }}><AiFillPhone style={{ color: 'rgb(101, 253, 40, 0.9)' }} />+7-950-038-31-73</div><br />
          <div style={{ float: 'right' }}>Saint Petersburg</div><br />
        </div>
      </div>
    </div >
  )
}