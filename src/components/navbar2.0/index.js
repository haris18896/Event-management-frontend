import React, { useState } from 'react'
// import logo from '../../assets/images/header-logo-new.svg'

import UpdatedLogo from '../../assets/images/UpdatedLogo.svg'
import { Link, useHistory, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Insta from '../../assets/images/InstaIcon.svg'
import Facebook from '../../assets/images/facebookIcon.svg'
import { useSelector, useDispatch } from 'react-redux'
import classnames from 'classnames'
import { changeLanguage } from '../../Actions/languageAction'
import { changePage } from '../../Actions/PageAction'

const Navbar2PointO = () => {
  const location = useLocation()

  const history = useHistory()
  const [active, setActive] = useState(true)

  const [state, setState] = React.useState({
    left: false,
  })

  const { language } = useSelector(state => state.language)

  const dispatch = useDispatch()

  const toggleDrawer = (anchor, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }
  const handleClick = e => {
    // e.preventDefault();
    setActive(!active)
  }

  const handleLanuageChange = () => {
    if (language === 'nl') {
      dispatch(changeLanguage('de'))
    } else if (language === 'de') {
      dispatch(changeLanguage('en'))
    } else if (language === 'en') {
      dispatch(changeLanguage('nl'))
    }
  }

  const list = anchor => (
    <div style={{ position: 'relative' }} className='navbar__mob__box'>
      <Box
        height='100vh'
        width='100vw'
        role='presentation'
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div className='navbar__mob__iconDiv'>
          <div className='u-container-1180 u-mx-auto'>
            <IconButton style={{ color: '#fff' }}>
              <CloseIcon style={{ fontSize: 30, position: 'absolute', top: '50px' }} />
            </IconButton>
          </div>
        </div>

        <div
          style={{ position: 'absolute', top: '50%', width: '100%', transform: 'translate(0%,-50%)' }}
          className='navbar__mob__navItems'
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className='u-container-1000 u-mx-auto'
          >
            <ul className='navbar__mob__ul'>
              <Link to='/' className='navbar__mob--links'>
                <li className='navbar__mob--ItemsList '>
                  <span
                    className={window.location.pathname === '/' ? 'activeMenu' : ''}
                  >
                    {language === 'en' ? 'Welcome' : language === 'nl' ? 'Welkom' : 'Willkommen'}
                  </span>
                </li>
              </Link>
              <Link to='/visitors' className='navbar__mob--links'>
                <li className='navbar__mob--ItemsList'>
                  <span
                    className={window.location.pathname === '/visitors' ? 'activeMenu' : ''}
                  >
                    {language === 'en' ? 'Visitors' : language === 'nl' ? 'Bezoekers' : 'Besucher'}
                  </span>
                </li>
              </Link>
              <Link to='/tickets' className='navbar__mob--links'>
                <li className='navbar__mob--ItemsList'>
                  <span
                    className={window.location.pathname === '/tickets' ? 'activeMenu ' : ''}
                  >
                    {language === 'en' ? 'Tickets' : language === 'nl' ? 'Kaartjes' : 'Karten'}
                  </span>
                </li>
              </Link>
              <Link to='/business' className='navbar__mob--links'>
                <li className='navbar__mob--ItemsList'>
                  <span
                    className={window.location.pathname === '/business' ? 'activeMenu' : ''}
                  >
                    {language === 'en' ? 'Business' : language === 'nl' ? 'Bedrijf' : 'Unternehmen'}
                  </span>
                </li>
              </Link>
              <Link to='/contact' className='navbar__mob--links'>
                <li className='navbar__mob--ItemsList'>
                  <span
                    className={window.location.pathname === '/contact' ? 'activeMenu' : ''}
                  >
                    {language === 'en' ? 'Contact' : language === 'nl' ? 'Contact' : 'Kontakt'}
                  </span>
                </li>
              </Link>

              {/* <li className='navbar__item'>
                <a
                  id='NavLinksID'
                  style={{ textDecoration: 'none', color: 'white' }}
                  href='https://employee.trichter.nl'
                  target='_blank'
                >
                  MedeWerker Register
                </a>
              </li> */}

              <a to='/contact' className='navbar__mob--links' href='https://employee.trichter.nl/employee-registration' target='_blank'>
                <li className='navbar__mob--ItemsList'>
                  <span>
                    {language === 'en' ? 'Employee Register' : language === 'nl' ? 'MedeWerker Register' : 'Mitarbeiter Register'}
                  </span>
                </li>
              </a>

              <Link to='#' className='navbar__mob--links'>
                <li className='navbar__mob--ItemsList'>
                  <span
                  className='navbar__mob__LinkItems'>Covid-19</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className='navbar__mob__socialItems navbar-mob-SocialItems'>
          <div className='u-container-1000 u-mx-auto'>
            <List>
              <a
                className='navbar__mob--social'
                rel='noreferrer'
                target='_blank'
                href='https://www.instagram.com/magischmaastrichtvrijthof2021/'
              >
                <span className='navbar__mob__socialLinks'>
                  <img src={Insta} alt='instagram' />
                </span>
              </a>
              <a
                className=' navbar__mob--social'
                target='_blank'
                rel='noreferrer'
                href=' https://www.facebook.com/magischmaastrichtvrijthof2021'
              >
                <span className='navbar__mob__socialLinks'>
                  <img src={Facebook} alt='facebook' />
                </span>
              </a>
            </List>
          </div>
        </div>
      </Box>
    </div>
  )

  return (
    <nav className='navbar'>
      <div className='u-container-1180 u-mx-auto navbar__wrapper'>
        <ul className='navbar__list navbar__list--1'>
          <li className='navbar__item ' onClick={() => dispatch(changePage('welcome'))}>
            <Link
              id='NavLinksID'
              className={window.location.pathname === '/' ? 'activeMenu' : ''}
              style={{ textDecoration: 'none', color: 'white' }}
              to='/'
            >
              {language === 'en' ? 'Welcome' : language === 'nl' ? 'Welkom' : 'Willkommen'}
            </Link>
          </li>
          {/* <li className={active ? 'navbar__item navbar__item--active' : 'navbar__item'} onClick={() => history.push('/')} onChange={handleClick}>
            Welcome
          </li> */}

          <li className='navbar__item' onClick={() => dispatch(changePage('visitors'))}>
            <Link
              id='NavLinksID'
              className={window.location.pathname === '/visitors' ? 'activeMenu' : ''}
              style={{ textDecoration: 'none', color: 'white' }}
              to='/visitors'
            >
              {language === 'en' ? 'Visitors' : language === 'nl' ? 'Bezoekers' : 'Besucher'}
            </Link>
          </li>
          <li className='navbar__item'>
            <Link
              id='NavLinksID'
              className={window.location.pathname === '/tickets' ? 'activeMenu' : ''}
              style={{ textDecoration: 'none', color: 'white' }}
              to='/tickets'
            >
              {language === 'en' ? 'Tickets' : language === 'nl' ? 'Kaartjes' : 'Karten'}
            </Link>
          </li>
          <li className='navbar__item' onClick={() => dispatch(changePage('business'))}>
            <Link
              id='NavLinksID'
              className={window.location.pathname === '/business' ? 'activeMenu' : ''}
              style={{ textDecoration: 'none', color: 'white' }}
              to='/business'
            >
              {language === 'en' ? 'Business' : language === 'nl' ? 'Bedrijf' : 'Unternehmen'}
            </Link>
          </li>
          <li className='navbar__item'>
           <Link to="/"> <img src={UpdatedLogo} alt='Trichter Logo' /></Link>
          </li>
          <li className='navbar__item' onClick={() => dispatch(changePage('contact'))}>
            <Link
              id='NavLinksID'
              className={window.location.pathname === '/contact' ? 'activeMenu' : ''}
              style={{ textDecoration: 'none', color: 'white' }}
              to='/contact'
            >
              {language === 'en' ? 'Contact' : language === 'nl' ? 'Contact' : 'Kontakt'}
            </Link>
          </li>

          <li className='navbar__item'>
            <a
              id='NavLinksID'
              style={{ textDecoration: 'none', color: 'white' }}
              href=' https://employee.trichter.nl/employee-registration'
              target='_blank'
            >
              {language === 'en' ? 'Employee Register' : language === 'nl' ? 'MEDEWERKER REGISTREER' : 'Mitarbeiter Register'}
            </a>
          </li>
        </ul>

        <ul className='navbar__list navbar__list--lang'>
          <li
            className={classnames({
              'navbar__item navbar__item--lang': true,
              'navbar__item navbar__item--lang navbar__item--lang--active': language === 'nl',
            })}
            onClick={() => dispatch(changeLanguage('nl'))}
          >
            NL
          </li>
          <li
            className={classnames({
              'navbar__item navbar__item--lang': true,
              'navbar__item navbar__item--lang navbar__item--lang--active': language === 'de',
            })}
            onClick={() => dispatch(changeLanguage('de'))}
          >
            DE
          </li>
          <li
            className={classnames({
              'navbar__item navbar__item--lang': true,
              'navbar__item navbar__item--lang navbar__item--lang--active': language === 'en',
            })}
            onClick={() => dispatch(changeLanguage('en'))}
          >
            EN
          </li>
        </ul>
        {/* <ul className='navbar__list navbar__list--lang'>
          <li className='navbar__item navbar__item--lang'>NL</li>
          <li className='navbar__item navbar__item--lang'>DE</li>
          <li className='navbar__item navbar__item--lang'>ENG</li>
        </ul> */}

        <ul className='navbar__mob navbar__mob__list'>
          <li className='navbar__mob__menu'>
            {[''].map(anchor => (
              <React.Fragment style={{ padding: 0, margin: 0 }} key={anchor}>
                <>
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'white',
                    }}
                    onClick={toggleDrawer(anchor, true)}
                  >
                    <i class='fas fa-bars fa-2x'>{anchor}</i>
                  </button>
                  <SwipeableDrawer
                    className='navbar__mob__boxShadow'
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </>
              </React.Fragment>
            ))}
          </li>
          <li>
            <img className='navbar__mob__logo' src={UpdatedLogo} alt='Trichter Logo' />
          </li>

          {language === 'nl' ? (
            <li className='navbar__mob__selector' onClick={handleLanuageChange}>
              NL
            </li>
          ) : (
            ''
          )}
          {language === 'de' ? (
            <li className='navbar__mob__selector' onClick={handleLanuageChange}>
              DE
            </li>
          ) : (
            ''
          )}
          {language === 'en' ? (
            <li className='navbar__mob__selector' onClick={handleLanuageChange}>
              EN
            </li>
          ) : (
            ''
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar2PointO
