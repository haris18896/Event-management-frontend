/* eslint-disable react/jsx-no-target-blank */
import img01 from '../../assets/images/composed/babag.webp'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import Skeleton from '@mui/material/Skeleton'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const BuySectionTextSkeleton = () => {
  return (
    <div className=''>
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
    </div>
  )
}

const BuySectionHeadingSkeleton = () => {
  return (
    <div className=''>
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={50} />
    </div>
  )
}

const BuyTickets = () => {
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
    <div className='buy-tickets '>
      <div className='u-container-1180 u-mx-auto'>
        <div className='buy-tickets__content'>
          <div className='buy-tickets__image'>
            <img src={img01} alt='Image 01' />
          </div>
          <div className='buy-tickets__text'>
            <div className='buy-tickets__top'>
              <h1 className='buy-tickets__header'>
                {sectionContent?.heading ? sectionContent?.heading : <BuySectionHeadingSkeleton />}
              </h1>
            </div>
            <div className='buy-tickets__mid'>
              {sectionContent?.content ? ReactHtmlParser(sectionContent?.content) : <BuySectionTextSkeleton />}
            </div>
            <div className='buy-tickets__bottom'>
              <div className='visitors-btn'>
                <a
                  href='/tickets'
                  // target='_blank'
                  style={{ textDecoration: 'none', color: '#A40700' }}
                  className='visitors-btn__text'
                >
                  {language === 'en' ? 'Buy Tickets' : language === 'nl' ? 'Koop kaartjes' : 'Tickets kaufen'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyTickets
