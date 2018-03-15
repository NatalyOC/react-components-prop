import React from 'react';
import List from './List';
import PropTypes from 'prop-types'


const Section = ({contenido,arrCursos}) =>(
  <section>
  <p>{contenido}</p>
  <List cursos={arrCursos}/>
</section>
)

Section.propTypes={
  contenido:PropTypes.string.isRequired,
  cursos:PropTypes.array.isRequired
}
export default Section;