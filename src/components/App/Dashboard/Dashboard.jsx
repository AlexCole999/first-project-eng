import React from 'react';
import './Dashboard.css';
import { Routes, Route } from "react-router-dom";
import AddWord from './AddWord/AddWord';
import MyWords from './MyWords/MyWords';
import Profile from './Profile/Profile';
import Progress from './Progress/Progress';
import Instruction from './Instruction/Instruction';


export default function Dashboard(props) {
  return (
    <div className="dashboard-container">
      <div className="Dashboard">
        <div className="Dashboard-content">
          <Routes>
            <Route path='*' element={<Instruction firebase={props.firebase} />}>
            </Route>
            <Route exact path="/first-project-eng/addword" element={<AddWord firebase={props.firebase} />}>
            </Route>
            <Route exact path="/first-project-eng/mywords" element={<MyWords firebase={props.firebase} />}>
            </Route>
            <Route exact path="/first-project-eng/progress" element={<Progress firebase={props.firebase} />}>
            </Route>
            <Route exact path="/first-project-eng/profile" element={<Profile firebase={props.firebase} />}>
            </Route>
          </Routes>
        </div>
      </div >
    </div>
  )
}