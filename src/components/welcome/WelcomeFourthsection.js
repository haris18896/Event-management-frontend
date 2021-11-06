import FourthImage from '../../assets/images/composed/ring.webp'
import WelcomeFourIconone from '../../assets/images/WelcomeFourIconone.svg'
import WelcomeFourIconTwo from '../../assets/images/WelcomeFourIconTwo.svg'

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton'

const WelcomeForthTextSkeleton = () => {
  return (
    <div className=''>
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
    </div>
  )
}

const WelcomeFourthSection = () => {
  const [sectionContent, setSectionContent] = useState()
  const { language } = useSelector(state => state.language)
  const { pageId, pageSections } = useSelector(state => state.page)

  useEffect(() => {
    if (pageSections?.length) {
      const pageSection = pageSections.find(pageSection => pageSection.sectionNum === 3)

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
            <img className='fourthImageWelcome' style={{}} src={FourthImage} alt='Image231' />
          </div>
          <div className='buy-tickets__textWelcome buyTicketsWelcomeTex'>
            {/* <div className='buy-tickets__top'>
              <h1 className='buy-tickets__header'>Gratis inkom!</h1>
            </div> */}
            <div className='buy-tickets__mid'>
              <p>{sectionContent?.content || <WelcomeForthTextSkeleton />}</p>
            </div>
            <div className='buy-tickets__bottom'>
              <a target='_blank' href='https://www.instagram.com/magischmaastrichtvrijthof2021/'>
                <img style={{ padding: '0 20px 0px 0px' }} alt='image09' src={WelcomeFourIconone} />
              </a>
              <a target='_blank' href='https://www.facebook.com/magischmaastrichtvrijthof2021'>
                <img style={{ padding: '0 0px 0px 20px' }} alt='image1221' src={WelcomeFourIconTwo} />
              </a>
              {/* <div className='visitors-btn'>
                <p className='visitors-btn__text'>Buy Tickets</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeFourthSection
