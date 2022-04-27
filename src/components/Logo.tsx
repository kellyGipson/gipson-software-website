import React from 'react'

const Logo = () => {
  return (
    <div className="flex flex-col justify-center items-center my-32 gap-y-4">
      <img src={require("../assets/gipson-software-logo-mobile.png")} alt="" className="h-16 w-fit"/>
      <h1 className="font-sourceSansPro font-bold text-4xl text-center text-neutral-400">Gipson Software</h1>
    </div>
  )
}

export default Logo