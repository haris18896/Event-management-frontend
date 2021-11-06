import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton'

const PlanHeaderSkeleton = () => {
  return <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='rectangular' height={50} width={'100%'} />
}
const Plan = () => {
  const [sectionContent, setSectionContent] = useState()
  const { language } = useSelector(state => state.language)
  const { pageId, pageSections } = useSelector(state => state.page)

  useEffect(() => {
    if (pageSections?.length) {
      const pageSection = pageSections.find(pageSection => pageSection.sectionNum === 4)

      if (pageSection) {
        setSectionContent(pageSection)
      }
    }
  }, [pageSections])

  return (
    <div className='plan u-container-1180 u-mx-auto'>
      <hr className='plan-hr' />
      <h1 className='plan__heading u-text-center'>{sectionContent?.heading || <PlanHeaderSkeleton />}</h1>
      <div className='u-flex u-justify-center u-align-center'>
        <div className='visitors-btn'>
          <a
        
            style={{ textDecoration: 'none', color: '#A40700',fontFamily: 'Alegreya' }}
            href='https://www.visitmaastricht.com/'
            target='blank'
            className='visitors-btn__text'
          >
          {language === 'en' ? 'More Info' : language === 'nl' ? 'Meer informatie' : 'More info'}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Plan
