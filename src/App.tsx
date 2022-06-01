import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './components/dropdown/Dropdown';

const dropdownItems = [
  {title : "Index 1", value : 1 },
  {title : "Index 2", value : 2 },
  {title : "Index 3", value : 3 }
]

function App() {
  return (
    <div className="App">
      <div style={{marginTop : '50px', marginLeft : '50px', width : '200px'}}>
        <Dropdown items={dropdownItems} default={1}/>
      </div>
    </div>
  );
}

export default App;
