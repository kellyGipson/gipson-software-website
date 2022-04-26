import React from 'react'

const AboutUs = () => {
  return (
    <article id="aboutUs" className="flex flex-col items-center text-center my-8">
      <img src={require("../assets/computer_image_square.webp")} alt="" className="w-64 h-64 rounded-full my-8 ring-4 p-1 ring-mirage-200"/>
      <h1 className="text-2xl m-4">Professional Websites</h1>
      <p className="max-w-xl">Here at Gipson Software, we strive to deliver a beautiful and responsive website that you and your potential customers are sure to love. With custom-made websites, we can do anything you can dream of.</p>
      <div onClick={() => document.getElementById("meetTheTeam")?.scrollTo()} className="bg-cinnabar-400 w-max m-8 p-4 rounded-md hover:bg-cinnabar-500 active:scale-95 transition-[scale] duration-300 select-none">Contact Us</div>
    </article>
  )
}

export default AboutUs