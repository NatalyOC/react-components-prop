import React from 'react';
import Header from './Header';
import Section from './Section';

const Datos=['Redux','React-router','Js'];
const objData={
  title:'Esto es mi spa de react',
  url : '',
  paragraph:'Libreria de js que me permite trabajar las vistas de mi spa',
  content:'Si quiero llegar a realizar single page aplication',
  items:['Redux','React-router','Js']
}
const App = () => (
  <div>
    <Header
      title={objData.title}
      url={objData.url}
      paragraph={objData.paragraph}     
    />
    <Section
      contenido={objData.content}
      arrCursos={objData.items}
      /> 
  </div>
)
export default App;