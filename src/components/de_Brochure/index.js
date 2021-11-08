/* eslint-disable react/jsx-no-target-blank */
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import UpdatedBuisnessOne from '../../assets/images/composed/house.webp'
import Skeleton from '@mui/material/Skeleton'
import ReactHtmlParser from 'react-html-parser'
import { Link } from 'react-router-dom';

const BrochureTextSkeleton = () => {


  return (
    <div className='business-tickets__mid'>
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
    </div>
  )
}

const Brochure = () => {

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
    <>
      <div className='business-tickets'>
        <div className='u-container-1180 u-mx-auto'>
          <div className='business-tickets__content'>
            <div className='business-tickets__image'>
              <img src={UpdatedBuisnessOne} alt='Image02' />
            </div>
            <div className='business-tickets__text'>
              {sectionContent?.content ? (
                <div className='business-tickets__mid business-tickets-link'>{ReactHtmlParser(sectionContent.content)}</div>
              ) : (
                // <BrochureTextSkeleton />
                <BrochureTextSkeleton />
              )}

              <div className='business-tickets__bottom'>
                <div className='visitors-btn'>
                  <p className='visitors-btn__text'>
                    <Link
                    className="visitors-btn--downloadLink"
                    to="https://storage.googleapis.com/events-registration-website.appspot.com/website/Sponsorpakketten%202021%20Magisch%20Maastricht%20Vrijthof.pdf"
                    download
                    target="_blank"
                    >
                    {language === 'en' ? 'Download the Brochure / Sponsor Packages' : language === 'nl' ? 'Download de Brochure / Sponsorpakketten' : 'Laden Sie die Broschüre / Sponsorenpakete herunter'}

                      
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Brochure
