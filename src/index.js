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
  password: 'null',
  register : false
}
//Variable que tendrá el contenido jsx que variará según cambien los procesos
let App;
let emailLogin;
let passwordLogin;

const handleSubmit = (e) => {
  e.preventDefault();
  data.user = e.target.children[0].value;
  data.email = e.target.children[1].value;
  data.password = e.target.children[2].value;
  if(e.target.children[2].value !== ''){
    {alert('Ud ya puede ingresar ha sido registrado con éxito.')} 
    App = Welcome
   
   ReactDOM.render(App, document.getElementById('root'));
  } else {
   alert('No se ha podido registrar')
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

const handleOnclickRegister = () => {
  data.register = true;
  if(data.register){
   App = (
    <div>
      <h1>Ingresa tus datos por favor</h1>
       {Form}
    </div>
   )
  }
  ReactDOM.render(App, document.getElementById('root'));
};

const handleOnclickLogin = (e) => {
  e.preventDefault();
  emailLogin = e.target.children[0].value;
  passwordLogin = e.target.children[1].value;
  if(data.email === emailLogin && data.password === passwordLogin){
   App = (
    <div>
      <h1>Empezando con React ? </h1>
      <h2>Bienvenido {data.user}</h2>
      <p>Cualquier información te la enviaremos sobre React te la enviareamos a {data.email}</p>
    </div>
   )
   ReactDOM.render(App, document.getElementById('root'));
  } else {
   alert('El password o el email no es correcto')
  }
};

const formLogin = (e) => {
  e.preventDefault();
   App = (
    <form action="#" onSubmit={handleOnclickLogin}>
       <input type="email" placeholder="email" />
       <input type="password" placeholder="Password" />
       <input type="submit" />
   </form>
   )
   ReactDOM.render(App, document.getElementById('root'));
};
const Welcome = (
  <div>
  <h1>Bienvenido a React</h1>
  <button onClick = {formLogin}>Ingresar</button>
  <p>Para poder ingresar deberas registrarte</p>
  <button onClick = {handleOnclickRegister}>Registrarte</button>
 </div>
)

if (!data.user){
  console.log(data) 
   App = Welcome 
  }

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
