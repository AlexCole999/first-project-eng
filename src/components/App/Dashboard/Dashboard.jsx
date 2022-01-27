import React from 'react';
import './Dashboard.css';
import { Routes, Route } from "react-router-dom";
import AddWord from './AddWord/AddWord';
import MyWords from './MyWords/MyWords';
import Profile from './Profile/Profile';
import Progress from './Progress/Progress';
import Instruction from './Instruction/Instruction';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="Dashboard">
        <div className="Dashboard-content">
          <Routes>
            <Route path='*' element={<Instruction />}>
            </Route>
            <Route exact path="/first-project-eng/addword" element={<AddWord />}>
            </Route>
            <Route exact path="/first-project-eng/mywords" element={<MyWords />}>
            </Route>
            <Route exact path="/first-project-eng/progress" element={<Progress />}>
            </Route>
            <Route exact path="/first-project-eng/profile" element={<Profile />}>
            </Route>
          </Routes>
        </div>
      </div >
    </div>
  )
}