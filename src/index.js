import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Message from './prueba';

import registerServiceWorker from './registerServiceWorker';
//Objeto donde se guardan los datos del usuario
const data = {
  user: null,
  email: null,
  password: '123456',
  login : false
}
//Variable que tendrá el contenido jsx que variará según cambien los procesos
let App;

const handleSubmit = (e) => {
  e.preventDefault();
  data.user = e.target.children[0].value;
  data.email = e.target.children[1].value;
  if(e.target.children[2].value === data.password){
   App = (
    <div>
      <h1>Empezando con React ? </h1>
      <h2>Bienvenido {data.user}</h2>
      <p>Cualquier información te la enviaremos sobre React te la enviareamos a {data.email}</p>
    </div>
   )
   ReactDOM.render(App, document.getElementById('root'));
  } else {
   alert('La contraseña es invalida')
  }
} 

const Form = (
  <form action="#" onSubmit={handleSubmit}>
       <input type="text" placeholder="usuario" />
       <input type="email" placeholder="email" />
       <input type="password" placeholder="Password" />
       <input type="submit" />
   </form>
  )

const handleOnclickLogin = () => {
  data.login = true;
  if(data.login){
   App = (
    <div>
      <h1>Ingresa tus datos por favor</h1>
       {Form}
    </div>
   )
  }
  ReactDOM.render(App, document.getElementById('root'));
};

const Welcome = (
  <div>
  <h1>Bienvenido a React</h1>
  <p>Para poder ingresar deberas logearte</p>
  <button onClick = {handleOnclickLogin}>Login</button>
 </div>
)

if (!data.user){
  console.log(data) 
   App = Welcome 
  }

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
