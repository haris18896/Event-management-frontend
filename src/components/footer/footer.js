import React from 'react'

// ** IMAGES ICONS
import FooterLogo from '../../assets/images/logo_footer.svg'
// import desSamall from '../../assets/images/Small.svg'
import desSamall from '../../assets/images/Des_small_masked.svg'
import Des from '../../assets/images/Des_big_masked.svg'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Footer() {

  const handleclcikemail =()=>{
    
      window.open('mailto:info@magischmaastrichtvrijthof.nl')
     
   
  }


  const handleClickMap=()=>{

    window.open("https://www.google.com/maps?q=Vrijthof+Maastricht&um=1&ie=UTF-8&sa=X&ved=2ahUKEwja5ITflIH0AhUwgv0HHeq1B7oQ_AUoAXoECAEQAw")
  }
  const history = useHistory()
  const { language } = useSelector(state => state.language)

  return (
    <div className='footer'>
      <div className='u-container-1180 u-mx-auto footer__wrapper'>
        <div className='footer__des-big'>
          <img src={Des} alt='Des' />
        </div>
        <div className='footer__des-small'>
          <img style={{ position: 'relative', top: '6px' }} src={desSamall} alt='Des' />
        </div>
        <div className='footer__general'>
          <div className='footer__logo'>
            <img src={FooterLogo} alt='FooterLogo' />
          </div>

          <div className='footer__email'>
            <p onClick={handleClickMap} style={{ fontStyle: 'normal',cursor:"pointer" }} className='footer__para'>
              <span>
                <i className='fas fa-map-marker-alt footer__icon'></i>
              </span>
              Vrijthof Maastricht
            </p>
         <p  onClick={handleclcikemail} style={{ fontStyle: 'normal' ,cursor:"pointer"}} className='footer__para'>
        
              <span >
                <i  className='fas fa-envelope footer__icon'></i>
              </span>
           
               info@magischmaastrichtvrijthof.nl
           
            </p>
           
      
          </div>
          
        </div>
        <div className='footer__links'>
          <h1 className='footer__heading'>Links</h1>
          <ul>
            <li style={{ fontStyle: 'normal' }} onClick={() => history.push('/')}>
              {language === 'en' ? 'Welcome' : language === 'nl' ? 'Welkom' : 'Willkommen'}
            </li>
            <li style={{ fontStyle: 'normal' }} onClick={() => history.push('/visitors')}>
              {language === 'en' ? 'Visitors' : language === 'nl' ? 'Bezoekers' : 'Besucher'}
            </li>
            <li style={{ fontStyle: 'normal' }} onClick={() => history.push('/business')}>
              {language === 'en' ? 'Business' : language === 'nl' ? 'Bedrijf' : 'Unternehmen'}
            </li>
            <li style={{ fontStyle: 'normal' }} onClick={() => history.push('/contact')}>
              {language === 'en' ? 'Contact' : language === 'nl' ? 'Contact' : 'Kontakt'}
            </li>
            <li style={{ fontStyle: 'normal' }} onClick={() => history.push('/tickets')}>
              {language === 'en' ? 'Tickets' : language === 'nl' ? 'Kaartjes' : 'Karten'}
            </li>
          </ul>
        </div>
        <div className='footer__details'>
          <div className='footer__enterance'>
            <h1 className='footer__heading'>{language === 'en' ? 'Entrance' : language === 'nl' ? 'Entree' : 'Eingang'}</h1>
            <p style={{ fontStyle: 'normal' }}>{language === 'en' ? 'For Free' : language === 'nl' ? 'Gratis' : 'Kostenlos'}</p>
          </div>
          <div className='footer__date'>
            <h1 className='footer__heading'>
              {language === 'en' ? 'Opening hours' : language === 'nl' ? 'Openingdagen' : 'Öffnungszeiten'}
            </h1>
            <p style={{ fontStyle: 'normal' }}>
              {language === 'en'
                ? 'Wednesday December 1 - Friday December 31'
                : language === 'nl'
                ? 'Woensdag 1 December - Vrijdag 31 December'
                : 'Mittwoch, 1. Dezember - Freitag, 31. Dezember'}
            </p>
          </div>
          <div className='footer__time'>
            <h1 className='footer__heading'>
              {language === 'en' ? 'Opening hours' : language === 'nl' ? 'Openingdagen' : 'Öffnungszeiten'}
            </h1>
            <p style={{ fontStyle: 'normal' }}>
              {language === 'en'
                ? 'Daily 10:00 to 22:00'
                : language === 'nl'
                ? 'Dagelijks 10:00tot 22:00'
                : 'Täglich 10:00 bis 22:00'}
            </p>
          </div>
        </div>
        <div className='footer__info'>
          <h1 className='footer__heading'>Contact Info</h1>

          <ul>
            <li style={{ fontStyle: 'normal' }}>Trichter BV </li>
            <li style={{ fontStyle: 'normal' }}> Bassin 120 </li>
            <li style={{ fontStyle: 'normal' }}> 6211AK Maastricht </li>
            <li style={{ fontStyle: 'normal' }}> BTW Nr: NL863019675B01</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
