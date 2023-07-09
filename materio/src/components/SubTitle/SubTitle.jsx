import React from 'react'
import './SubTitle.css'

const SubTitle = ({children}) => {
  return (
    <div>
        <p className='subtitle'>{children}</p>
    </div>
  )
}

export default SubTitle