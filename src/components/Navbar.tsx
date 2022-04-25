import { useState } from 'react'
import { AiOutlineMenuUnfold } from 'react-icons/ai'

import NavItem from './NavItem'

const Navbar = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  function handleMenuClick() {
    setNavMenuOpen(!navMenuOpen);
  }
  
  return (
    <>
      <div className='fixed top-0 left-0 w-screen h-16 m-0 flex flex-row bg-mirage-400'>
        <AiOutlineMenuUnfold onClick={() => handleMenuClick()} className='h-8 w-auto fill-white mx-4 my-auto'/>
        <img className='w-auto h-8 m-4' src={require("../assets/gipson-software-logo.png")} alt="Gipson Software" />
      </div>
      <div className='h-16'/>
      <NavItem name={"Home"}/>
    </>
  )
}

export default Navbar