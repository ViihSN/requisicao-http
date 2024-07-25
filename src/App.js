import React, { useEffect, useState } from 'react';
import './style.css'

//API = https://sujeitoprogramador.com/rn-api/?api=posts 

function App() {
  const [nutri, setNutri] = useState([]);
  
  //o que tem dentro dessa função, vai ser chamado quando abrir o site
  useEffect(() => {

    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      //requisição
      fetch(url)
      //promisse = then
      .then((resultado) => resultado.json())
      .then((json) => {
        //vou ter todo o resultado da api dentro do json
        console.log(json);
        setNutri(json);
      })

    }
    loadApi();

  }, []);

  return (

    <div className='container'>
      <header>
        <strong>React Nutri</strong>
      </header> 

      {nutri.map((item) => {
        return (
          <article key={item.id} className='post'>
            <strong className='titulo'>{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className='capa'/>
            <p className='subtitulo'>
              {item.subtitulo}
            </p>
            <a className='botao'>Acessar</a>
          </article>
        )
      })}
        <footer className='footer'>
          <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by 
            <a href="#">React Nutri</a>.
          </p>
        </footer>
    </div>
  );
}

export default App;