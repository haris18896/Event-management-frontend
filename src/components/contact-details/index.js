import img01 from '../../assets/images/composed/star.webp'

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import Skeleton from '@mui/material/Skeleton'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ReactHtmlParser from 'react-html-parser'

const ContactDetailsHeadingSkeleton = () => {
  return (
    <div className=''>
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={50} />
    </div>
  )
}

const ContactDetailsTextSkeleton = () => {
  return (
    <div className='contact-details__mid'>
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
    </div>
  )
}

const ContactDetails = () => {
  const [sectionContent, setSectionContent] = useState()
  const { language } = useSelector(state => state.language)
  const { pageId, pageSections } = useSelector(state => state.page)

  useEffect(() => {
    if (pageSections?.length) {
      const pageSection = pageSections.find(pageSection => pageSection.sectionNum === 1)

      if (pageSection) {
        setSectionContent(pageSection)
      }
    }
  }, [pageSections])
  return (
    <div className='contact-details'>
      <div className='u-container-1180 u-mx-auto'>
        <div className='contact-details__content'>
          <div className='contact-details__image'>
            <img src={img01} alt='Image 01' />
          </div>
          <div className='contact-details__text'>
            <div className='contact-details__top'>
              <h1 className='contact-details__header'>{sectionContent?.heading || <ContactDetailsHeadingSkeleton />}</h1>
              {/* <h1 className='contact-details__header'>
                <ContactDetailsHeadingSkeleton />
              </h1> */}
            </div>

            {sectionContent?.content ? (
              <div className='contact-details__mid'>{ReactHtmlParser(sectionContent?.content)}</div>
            ) : (
              // <ContactDetailsTextSkeleton />
              <ContactDetailsTextSkeleton />
            )}
            <div className='contact-details__bottom'>
              <div className='visitors-btn visitors-btn--link'>
                <a href='https://employee.trichter.nl/employee-registration' target='_blank' className='visitors-btn__text'>
                {language === 'en' ? 'Sign In' : language === 'nl' ? 'Meld je aan' : 'Einloggen'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
