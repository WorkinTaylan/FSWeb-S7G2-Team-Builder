import React, { useState, useEffect } from 'react';
import './App.css';
import FormOlustur from './Form';

function App() {

  
  const [teamMem, setTeamMem]=useState([
    {isim:'Taylan',soyisim:'Açıkgöz',role:'Warrior'},
    {isim:'Elon',soyisim:'Musk',role:'Healer'},
    {isim:'Derya',soyisim:'Sevimsiz',role:'Journalist'},
  ])


  return (
    <div className="App">
      <h2>Takım Listesi</h2>
      {teamMem.map(person=>
      <div className='App-container'>
        <p className='List'>{person.isim} {person.soyisim} {person.role}</p>
      </div>)}
      <FormOlustur/>

     
    </div>
  );
}

export default App;
