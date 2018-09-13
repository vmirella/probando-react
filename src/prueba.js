import React from 'react';

const str = 'Hola mundo desde mesage con variable';
const li = (props) => <li>{props.firstname}{props.lastname}</li>
const ul = (<ul className ='container'>
  <li>Hola Chau</li>
  <li>Hola2</li>
  <li>Hola2</li>

</ul>)

li.propTypes = {
  firstname(props, propsName, componentName){
    if(typeof props^[propsName] !== 'string'){
      return new Error('hey you should pass a string for');
    }
  }
}
export default ul;