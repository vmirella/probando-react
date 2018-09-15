import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Message from './prueba';

import registerServiceWorker from './registerServiceWorker';

const data = {
  name: null,
  email: null,
  password: null
}

const handlerClick = (e) => {
  if(e.target.name === 'name'){
    data.name = e.target.value;
  } else if (e.target.name === 'email') {
    data.email = e.target.value;
  } else if (e.target.name === 'password') {
    data.password = e.target.value;
  }
  
}
const handleClickB=(e)=>{
  (<div>
    <label>Nombre:{data.name}</label>
    <label>Email:{data.email}</label>
  </div>);
  
}
const formLogin = (
  <div id="myForm">
    <label>Nombre:</label>
    <input name="name" onChange={handlerClick}>{data.name}</input><br></br>
    <label>Correo:</label>
    <input name="email" onChange={handlerClick}>{data.email}</input><br></br>
    <label>Contraseña:</label>
    <input name="password" onChange={handlerClick}></input><br></br>
    <button onClick={handleClickB}>Guardar</button>
  </div>
);

ReactDOM.render(formLogin, document.getElementById('root'));
registerServiceWorker();
