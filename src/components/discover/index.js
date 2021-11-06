import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import discoverIcon from '../../assets/images/discover-icon.png'
// import PlusDivider from '../../assets/images/Plus-Divider.svg'
import Img02 from '../../assets/images/composed/kid2.webp'
import Img03 from '../../assets/images/composed/snow.webp'
import ReactHtmlParser from 'react-html-parser'
import Skeleton from '@mui/material/Skeleton'
import parse from 'html-react-parser'
import HtmlParser from 'react-html-parser'

const DiscoverTextSkeleton = () => {
  return (
    <div className='discover__left-mid__text'>
      <p className='discover__left-mid__top'>
        <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='rectangular' height={30} />
      </p>
      <br />
      <div className='discover__left-mid__mid'>
        <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='rectangular' height={30} />
        <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='rectangular' height={30} />
        <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='rectangular' height={30} />
      </div>
      <br />
      <div className='discover__left-mid__bottom'>
        <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='rectangular' width={100} height={50} />
        {/* <div className='visitors-btn'>
        </div> */}
      </div>
    </div>
  )
}

const DiscoverTextMobSkeleton = () => {
  return (
    <div className='discover__left-mid__text'>
      <p className='discover__left-mid__top'>
        <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='rectangular' height={30} />
      </p>
      <br />
      <div className='discover__left-mid__mid'>
        <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='rectangular' height={30} />
        <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='rectangular' height={30} />
        <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='rectangular' height={30} />
      </div>
      <br />
    </div>
  )
}

const DiscoverHeaderSkeleton = () => {
  return <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='rectangular' height={50} width={'100%'} />
}

const Discover = () => {
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
  return (
    <>
      <div    className='discover u-container-1180 u-mx-auto'>
        <div className='discover__main u-flex u-justify-between'>
          <div  className='discover__left u-flex-1'>
            <div className='discover__left__vertical'></div>
            <div className='discover__left__horizontal'></div>

            <h1 className='discover__heading'>{sectionContent?.heading || <DiscoverHeaderSkeleton />}</h1>
            {/* <h1 className='discover__heading'>{<DiscoverHeaderSkeleton />}</h1> */}

            <div className='discover__left-mid u-flex u-justify-between'>
              <div  className='discover__left-mid__image u-flex-1'>
                <img className='discover__left-mid__icon' src={discoverIcon} alt='Discover Icon' />
              </div>
              {/* <img className='discover__plus-divider' src={PlusDivider} alt='Plus Divider' /> */}

              {sectionContent?.content ? (
                <div  className='discover__left-mid__text  discover-left-text-stylesBigScreen '>
                  {parse(sectionContent?.content)}
                  {/* <div className='' dangerouslySetInnerHTML={{ __html: sectionContent?.content }}></div> */}
                  {/* <p className='discover__left-mid__top'>
                    In een unieke en gezellige winterambiance er zijn diverse opties mogelijk i.c.m. catering, entertainment en/of
                    winterattracties.
                  </p>
                  <div className='discover__left-mid__mid'>
                    <p>Reuzenrad</p>
                    <p>Schaatsbaan</p>
                    <p>Kerstmarkt</p>
                    <p>Kerstmarkt (sluit dagelijks oom 22:00 uur)</p>
                    <p>Food kraampjes</p>
                    <p>Diverse horeca gelegenheden</p>
                  </div> */}

                  <div  style={{display:"none",background:"red"}} className='discover__left-mid__bottom'>
                    <div className='visitors-btn'>
                      <p style={{fontFamily: 'Alegreya'}} className='visitors-btn__text'>More Info</p>
                    </div>
                  </div>
                </div>
              ) : (
                // <DiscoverTextSkeleton />
                // <DiscoverTextSkeleton />
                <DiscoverTextSkeleton />
              )}
            </div>
          </div>
          <div className='discover__right'>
            <div className='discover__gallery'>
              <div className='discover__gallery__top'>
                <img src={Img02} alt='Img02' />
              </div>

              <div className='discover__gallery__bottom'>
                <img src={Img03} alt='Img03' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='discover-mob u-container-1180 u-mx-auto'>
        <div className='discover-mob__top'>
          <img delayMethod='debounce' delayTime={1000} effect='black-and-white' src={Img02} alt='' />
        </div>
        <div className='discover-mob__mid'>
          <div className='discover-mob__mid__vertical'></div>
          <div className='discover-mob__mid__horizontal'></div>
          <h1 className='discover-mob__heading'>{sectionContent?.heading || <DiscoverHeaderSkeleton />}</h1>
          {/* <h1 className='discover-mob__heading'>{<DiscoverHeaderSkeleton /> || <DiscoverHeaderSkeleton />}</h1> */}

          <div className='discover-mob__text discover-left-text-styles'>
            {sectionContent?.content ? HtmlParser(sectionContent?.content) : <DiscoverTextMobSkeleton />}
            {/* {sectionContent?.content ? <DiscoverTextMobSkeleton /> : <DiscoverTextMobSkeleton />} */}

            <div style={{display:"none"}} className='discover-mob__text__bottom'>
              <div className='visitors-btn'>
                <p className='visitors-btn__text'>
                {language === 'en' ? 'More Info' : language === 'nl' ? 'Meer informatie' : 'Mehr Info'}
                </p>
                <p style={{fontFamily: 'Alegreya'}}  className='visitors-btn__text'>More Info</p>
              </div>
            </div>
          </div>
        </div>

        <div className='discover-mob__bottom'>
          <img src={Img03} alt='' />
        </div>
      </div>
    </>
  )
}

export default Discover
