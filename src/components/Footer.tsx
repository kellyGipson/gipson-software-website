import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className="flex flex-col justify-center h-64">
      <h1 className='text-2xl text-white font-bold my-4'>Contact Us!</h1>
      <div className="flex flex-row gap-x-4">
        <h1 className="font-bold">Phone</h1>
        <div>(919)249-8438</div>
      </div>
      <div className="flex flex-row gap-x-4">
        <h1 className="font-bold">Email</h1>
        <a href="mailto:kelly@gipsonsoftware.com?subject=Custom%20Website%20Inquiry" className="ml-2">kelly@gipsonsoftware.com</a>
      </div>
    </footer>
  )
}

export default Footer