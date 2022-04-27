import React from 'react'

type propTypes = {
  name: string,
}

const NavItem = ({ name }: propTypes) => {
  return (
    <div id={name} className="font-light text-neutral-200 h-min m-2 px-4 py-2 rounded-lg hover:bg-neutral-800" onClick={() => console.log("scroll")}>
      {name}
    </div>
  )
}

export default NavItem