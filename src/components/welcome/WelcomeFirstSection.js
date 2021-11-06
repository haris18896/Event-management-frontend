import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import WelcomeOneUpdated from '../../assets/images/composed/circus.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Skeleton from '@mui/material/Skeleton'

const WelcomeFirstTextSkeleton = () => {
  return (
    <div className=''>
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
    </div>
  )
}
const WelcomeFirstSection = () => {
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
      <div className='welcome-first'>
        <div className='u-container-1180 u-mx-auto'>
          <div className='welcome-first__content'>
            <div className='welcome-first__image'>
              <img src={WelcomeOneUpdated} alt='Image02' />
            </div>
            <div className='welcome-first__text'>
              <div className='welcome-first__mid'>
                <p>{sectionContent?.content || <WelcomeFirstTextSkeleton />}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WelcomeFirstSection
