import React, { useState, useEffect } from 'react'
import img01 from '../../assets/images/composed/kid.webp'
import { useSelector, useDispatch } from 'react-redux'
import { submitForm } from '../../Actions/ContactAction'
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'
import { notify, AlertNotify, AlertError } from '../react-toastify/Toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import ReactHtmlParser from 'react-html-parser'

import Skeleton from '@mui/material/Skeleton'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ContactFormHeadingSkeleton = () => {
  return (
    <div className=''>
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={50} />
    </div>
  )
}
const ContactForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [query, setQuery] = useState('')

  const [recaptcha, setRecaptcha] = useState({ isVerified: false })

  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setMobileNumber('')
    setQuery('')
  }

  const dispatch = useDispatch()

  const { error, successResponse } = useSelector(state => state.contactForm)

  const [sectionContent, setSectionContent] = useState()
  const { language } = useSelector(state => state.language)
  const { pageId, pageSections } = useSelector(state => state.page)

  useEffect(() => {
    if (pageSections?.length) {
      const pageSection = pageSections.find(pageSection => pageSection.sectionNum === 2)

      if (pageSection) {
        setSectionContent(pageSection)
      }
    }
  }, [pageSections])

  useEffect(() => {
    if (successResponse) {
      notify()
      resetForm()
    } else if (error) {
      AlertError()
    }
  }, [successResponse, error])

  const handleSubmit = e => {
    e.preventDefault()
    console.log('button is working')

    if (firstName && lastName && email && mobileNumber && query) {
      dispatch(submitForm({ firstName, lastName, email, mobileNumber, query }))
    } else {
      AlertNotify()
    }
  }

  const handleOnChange = value => {
    console.log('Captcha value:', value)
    setRecaptcha({ isVerified: true })
  }

  const handleOnExpired = () => {
    setRecaptcha({ isVerified: false })
  }


  return (
    <div className='contact-form'>
      <div className='u-container-1180 u-mx-auto'>
        <hr className='contact-form__hr' />
        <h1 className='contact-form__header'>{sectionContent?.heading || <ContactFormHeadingSkeleton />}</h1>
        {/* <h1 className='contact-form__header'>{sectionContent?.heading || <ContactFormHeadingSkeleton />}</h1> */}

        {/* <div className='contact-form__para-content'>
          <p className='contact-form__para'>U kunt contact opnemen met de kerstmarkt organisatie via &nbsp; </p>
          <p className='contact-form__para contact-form__para--bold'>info@magischmaastrichtvrijthof.nl</p>
        </div> */}

        {sectionContent?.content ? (
          <div className='contact-form__para-content'>
            <p className='contact-form__para'>
              {ReactHtmlParser(sectionContent?.content)} &nbsp;
              <span
                className='contact-form__para--bold'
                onClick={() => {
                  window.open('mailto:info@magischmaastrichtvrijthof.nl')
                }}
              >
                info@magischmaastrichtvrijthof.nl
              </span>
            </p>
          </div>
        ) : (
          <ContactFormHeadingSkeleton />
        )}
        {/* <div className='contact-form__para-content'>{ReactHtmlParser(sectionContent?.content || '<p>Loading...</p>')}</div> */}
        {/* <div>{ReactHtmlParser(sectionContent?.content || '<p>Loading...</p>')}</div> */}

        <div className='contact-form__content'>
          <div className='contact-form__wrapper'>
            <form
              className='contact-form__form'
              method='POST'
              // onSubmit={submitHandler}
            >
              <div className='contact-form__form-group'>
                <label className='contact-form__label' htmlFor='firstName'>
                  {language === 'en' ? 'First Name' : language === 'nl' ? 'Voornaam' : 'Vorname'}
                  <span style={{ color: 'red' }}> *</span>
                </label>
                <br />
                <input
                  required
                  className='contact-form__input'
                  type='text'
                  id='name'
                  // placeholder='voornaam'
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
              </div>
              <div className='contact-form__form-group'>
                <label className='contact-form__label' htmlFor='lastName'>
                  
                  {language === 'en' ? 'Last Name' : language === 'nl' ? 'Achternaam' : 'Nachname'}
                   <span style={{ color: 'red' }}> *</span>
                </label>
                <br />
                <input
                  required
                  className='contact-form__input'
                  type='text'
                  id='name'
                  // placeholder='Achternaam'
                  value={lastName}
                  onChange={e => {
                    setLastName(e.target.value)
                    // console.log(e.target.value)
                  }}
                />
              </div>
              <div className='contact-form__form-group'>
                <label className='contact-form__label' htmlFor='email'>
                  {language === 'en' ? 'Email Address' : language === 'nl' ? 'E-mailadres' : 'E-Mail-Addresse'}
                  <span style={{ color: 'red' }}> *</span>
                </label>
                <br />
                <input
                  required
                  className='contact-form__input'
                  type='email'
                  id='email'
                  // placeholder='Vul je e-mailadres in'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className='contact-form__form-group'>
                <label className='contact-form__label' htmlFor='phoneNumber'>
                  
                  {language === 'en' ? 'Phone / GSM' : language === 'nl' ? 'Telefoon / gsm ' : 'Telefon / GSM'}
                  <span style={{ color: 'red' }}> *</span>
                </label>
                <br />
                <input
                  required
                  className='contact-form__input'
                  type='text'
                  id='name'
                  // placeholder='telefoonnummer'
                  value={mobileNumber}
                  onChange={e => setMobileNumber(e.target.value)}
                />
              </div>

              <div className='contact-form__form-group'>
                <label className='contact-form__label' htmlFor='phoneNumber'>
                {language === 'en' ? 'Your question / comment' : language === 'nl' ? 'Uw vraag / opmerking ' : 'Ihre Frage / Kommentar'}
                  
                   <span style={{ color: 'red' }}>*</span>
                </label>
                <br />
                <textarea
                  required
                  className='contact-form__input'
                  id='name'
                  // placeholder='Uw vraag / opmerking'
                  rows={6}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
              </div>

              <div className='contact-form__check-group'>
                <span className='reCaptcha'>
                  <ReCAPTCHA
                    sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                    onChange={handleOnChange}
                    // className="contact-form__reCaptcha"
                    onExpired={handleOnExpired}
                    className='reCaptcha__large'
                  />

                  <ReCAPTCHA
                    sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                    onChange={handleOnChange}
                    className='reCaptcha__small'
                    size='compact'
                    onExpired={handleOnExpired}
                  />
                </span>

                {/* <input required type='checkbox' id='vehicle1' name='vehicle1' value='robot' /> */}
              </div>

              <div>
                <button
                  disabled={!recaptcha.isVerified}
                  className={!recaptcha.isVerified ? 'Button-Submit__disabled' : 'Button-Submit'}
                  onClick={handleSubmit}
                >
                  
                {language === 'en' ? 'Submit' : language === 'nl' ? 'Indienen' : 'einreichen'}
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
          <div className='contact-form__image-wrapper'>
            <img src={img01} alt='contact-formImage' className='contact-form__image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
