import React from 'react';
import './styles.css';

 
function Doador( {doador} ){
  return (
    <li className="doacao-item">
    <header>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyXcpr6oOE7XKkweNTOxjKjNDsB28AA6NsvUyeAWtkJNPaFXym" alt="Roupas Usadas"/>
      <div className="user-info">
        <strong>Nome:<span> {doador.nome} </span></strong>
        <strong>Celular:<span> {doador.celular} </span></strong>
        <strong>Email:<span> {doador.email} </span></strong>
      </div>
    </header>
    {/* <p>Descrição: {doador.desc_doador}</p> */}
    <button type="submit">Editar</button>
    <button type="submit">Excluir</button>
  </li>
  )
}

export default Doador;