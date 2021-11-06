import logo from '../../assets/images/logo.png'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='u-container-1300 u-mx-auto u-flex u-justify-between u-align-center'>
        <a className='navbar__logo' href>
          <img src={logo} alt='Trichter Logo' />
        </a>

        <ul className='navbar__list u-flex'>
          <li className='navbar__item'>Wellcome</li>
          <li className='navbar__item'>Visitors</li>
          <li className='navbar__item'>Tickets</li>
          <li className='navbar__item'>Business</li>
          <li className='navbar__item'>Contact</li>
        </ul>

        <div className='btn'>
          <p className='btn__text'>Get Started</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
