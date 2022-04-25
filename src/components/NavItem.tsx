import React from 'react'

type propTypes = {
  name: string,
}

const NavItem = ({ name }: propTypes) => {
  return (
    <div className="m-2 sm:block">{name}</div>
  )
}

export default NavItem