import React from 'react'
import './Title.css'

const Title = ({children}) => {
  return (
    <div>
        <p className='title'>{children}</p>
    </div>
  )
}

export default Title