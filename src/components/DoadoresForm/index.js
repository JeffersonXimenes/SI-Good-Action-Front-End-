import React, { useState, useEffect } from 'react';



function DoadoresForm( { onSubmit }){

    const [nome_doador, setNomeDoador] = useState('');
    const [cpf_doador, setCpfDoador] = useState('');
    const [email_doador, setEmailDoador] = useState('');
    const [celular_doador, setCelularDoador] = useState('');
    const [desc_doador, setDescDoador] = useState('');
    
    //Area da geolocalizacao
    const [doadorLatitude, setLatitude] = useState('');
    const [doadorLongitude, setLongitude] = useState('');


  //Obtem latitude e longitude do Google API
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );

  }, [])


async function handleOnSubmit(e){
    e.preventDefault();

   await onSubmit({
    id : 1,
    nome: nome_doador,
    cpf: cpf_doador,
    email: email_doador,
    celular: celular_doador,
    latitude: doadorLatitude,
    longitude: doadorLongitude
   });
   
   setNomeDoador('');
   setCpfDoador('');
   setEmailDoador('');
   setCelularDoador('');
   setDescDoador('');
}

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="input-block">
              <label htmlFor="nome_doador">Nome</label>
              <input
                name="nome_doador"
                id="nome_username"
                required
                value={nome_doador}
                onChange={e => setNomeDoador(e.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="cpf_doador">CPF</label>
              <input
                name="cpf_doador"
                id="cpf_doador"
                required
                value={cpf_doador}
                onChange={e => setCpfDoador(e.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="email_doador">E-mail</label>
              <input
                name="email_doador"
                id="email_doador"
                required
                value={email_doador}
                onChange={e => setEmailDoador(e.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="celular_doador">Celular</label>
              <input
                name="celular_doador"
                id="celular_doador"
                required
                value={celular_doador}
                onChange={e => setCelularDoador(e.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="desc_doador">Descrição do Item</label>
              <textarea
                name="desc_doador"
                id="desc_doador"
                rows="4"
                value={desc_doador}
                onChange={e => setDescDoador(e.target.value)}></textarea>
            </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude_doador">Latitude</label>
                <input
                  type="number"
                  name="latitude_doador"
                  id="latitude_doador"
                  required value={doadorLatitude}
                  onChange={e => setLongitude(e.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="longitude_doador">Longitude</label>
                <input
                  type="number"
                  name="longitude_doador"
                  id="longitude_doador"
                  required value={doadorLongitude}
                  onChange={e => setLongitude(e.target.value)} />
              </div>
            </div>
            <button type="submit">Salvar</button>
          </form>
    )
}

export default DoadoresForm;