import React from "react"
import logoImg from './../assets/react.svg'

const Logo = () => {
  return (
    <div className='h-16 w-16 logo'>
        <img src={logoImg} alt='logo'/>
        </div>
  )
}

export default Logo