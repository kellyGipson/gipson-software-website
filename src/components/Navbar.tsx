import NavItem from './NavItem'

const Navbar = () => {
  
  return (
    <div className='hidden sm:flex flex-row justify-center items-center bg-[rgb(29,31,32)] h-16 w-full rounded-t-md'>
      <NavItem name='About Us'/>
      <NavItem name='Development Process'/>
      <NavItem name='Tech Used'/>
      <NavItem name='Contact Us'/>
    </div>
  )
}

export default Navbar