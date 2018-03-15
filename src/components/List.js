import React from 'react';
import Items from './Items';

const List=({cursos})=>(
  <ul>
    {cursos.map(curso => <Items
                          curso={curso}
                          key={curso} />)}
  </ul>

)

export default List;