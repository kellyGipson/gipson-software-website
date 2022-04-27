import React from 'react'

type propTypes = {
  name: string;
  handleNavBarClick: (id: string) => void;
}

const NavItem = ({ name, handleNavBarClick }: propTypes) => {
  return (
    <div id={name} className="font-light text-neutral-200 h-min m-2 px-4 py-2 rounded-lg hover:bg-neutral-800" onClick={() => handleNavBarClick(name)}>
      {name}
    </div>
  )
}

export default NavItem