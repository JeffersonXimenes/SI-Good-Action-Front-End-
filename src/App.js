import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css'
import './app.css'
import './Sidebar.css'
import './Main.css'

import Doador from './components/Doadores';
import DoadoresForm from './components/DoadoresForm';

function App() {

  const [doadores, setDoadores] = useState([]);
  //Area do cadastro do Doador Objetos Comum

  //Obtem os dados do doador.
  useEffect(() => {
    async function LoadDoadores() {
      fetch('/doadores')
        .then(response => response.json())
        .then(data => {
          console.log("then GET", data);
          const { Doadores } = data;
          setDoadores(Doadores);
        })
    }
    LoadDoadores();
  }, [])

  async function handleAddDonation(data) {
    
    const response = await fetch('/doadores', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
   
    if(response.ok){
      console.log('DATA POST', data)
      setDoadores([...doadores, data])
    }

  }

  return (
    <>
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <DoadoresForm onSubmit={handleAddDonation} />
        </aside>
        <main>
          <ul>
            {doadores.map((doador, key) => (
              <Doador key={key} doador={doador} />
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
