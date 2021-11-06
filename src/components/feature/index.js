import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import Skeleton from '@mui/material/Skeleton'

const FeatureHeaderSkeleton = () => {
  return <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='rectangular' height={50} width={'100%'} />
}

const Feature = () => {
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
    <div className='feature u-container-1180 u-mx-auto'>
      <hr className='feature-hr' />
      <h1 className='feature__heading u-text-center'>{sectionContent?.heading || <FeatureHeaderSkeleton />}</h1>

      <div className='u-flex u-justify-center u-align-center'>
        <div className='visitors-btn'>
          <a
          style={{fontFamily: 'Alegreya'}} 
            target='blank'
            style={{ textDecoration: 'none', color: 'rgb(164, 7, 0)' }}
            href='https://www.maastrichtbereikbaar.nl/slimme-kaart'
            className='visitors-btn__text btnMoreInfo'
          >
          {language === 'en' ? 'More Info' : language === 'nl' ? 'Meer informatie' : 'More info'}
            
          </a>
        </div>
      </div>
    </div>
  )
}

export default Feature
