import React from 'react';
import PropTypes from 'prop-types'

const Header=({title,url,paragraph})=>(
  <header>
       <h1>{title}</h1>
       <img src={url}/>
     <p>{paragraph}</p>
  </header>
)

Header.propTypes={
  title:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
  paragraph:PropTypes.string.isRequired

}

export default Header;