import NavItem from './NavItem'

const Navbar = () => {

  const handleNavBarClick = (id: string) => {
    let idPair: string = "";
    switch(id) {
      case "About Us": idPair = "aboutUs"; break;
      case "Development Process": idPair = "devProcess"; break;
      case "Tech Used": idPair = "techUsed"; break;
      case "Contact Us": idPair = "contact"; break;
    }
    document.getElementById(idPair)?.scrollIntoView({behavior: "smooth", block: "start"});
  }
  
  return (
    <div id="navBar" className='hidden sm:flex flex-row justify-center items-center bg-[rgb(29,31,32)] h-16 w-full rounded-t-md'>
      <NavItem handleNavBarClick={handleNavBarClick} name='About Us'/>
      <NavItem handleNavBarClick={handleNavBarClick} name='Development Process'/>
      <NavItem handleNavBarClick={handleNavBarClick} name='Tech Used'/>
      <NavItem handleNavBarClick={handleNavBarClick} name='Contact Us'/>
    </div>
  )
}

export default Navbar