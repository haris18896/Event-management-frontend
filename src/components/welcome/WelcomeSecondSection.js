import discoverIcon from '../../assets/images/discover-icon.png'
import DiscoverIconTwo from '../../assets/images/DiscoverIconTwo.png'
import ReactHtmlParser from 'react-html-parser'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton'
import parse from 'html-react-parser'

const WelcomeSecondHeadingSkeleton = () => {
  return (
    <div className=''>
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={50} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={50} />
    </div>
  )
}

const WelcomeSecondHeadingMobSkeleton = () => {
  return (
    <div className=''>
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={50} />
    </div>
  )
}

// const WelcomeSecondTextSkeleton = () => {
//   return (
//     <div className=''>
//       <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} width={'100%'} />
//       <br />
//       <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} width={'100%'} />
//       <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} width={'100%'} />
//       <br />
//       <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} width={'100%'} />
//       <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} width={'100%'} />
//       <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} width={'100%'} />
//     </div>
//   )
// }
const WelcomeSecondTextSkeleton = () => {
  return (
    <div className='discover__left-mid__mid discover__left-mid__mid--welcome'>
      {/* <p className='demo'>
      </p> */}
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)', minWidth: '60rem' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)', minWidth: '60rem' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)', minWidth: '60rem' }} variant='text' height={30} />
      <br />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)', minWidth: '60rem' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)', minWidth: '60rem' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)', minWidth: '60rem' }} variant='text' height={30} />
    </div>
  )
}

const WelcomeSecondTextMobSkeleton = () => {
  return (
    <div className='discover-mob__text__mid'>
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <br />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='text' height={30} />
      {/* Maandag t/m donderdag van 11:00 tot 24:00 uur
      <br />
      Vrijdag, zaterdag en zondag van 10:00 tot 24:00 uur
      <br />
      (Non Food Kerstmarkt sluit dagelijks om 22:00 uur)
      <br />
      24 december van 10:00 tot 18:00 uur
      <br />
      25 december van 11:00 tot 18:00 uur Iedereen is van harte welkom!
      <br />
      Blijf ondertussen goed voor jullie zelf en jullie naasten zorgen.
      <br />
      #staysafe #seeyousoon */}
    </div>
  )
}

const WelcomeSecondSection = () => {
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
      <div style={{ marginBottom: '8.9rem' }} className='discover u-container-780 u-mx-auto'>
        <div className='discover__main u-flex u-justify-between'>
          <div className='discover__left u-flex-1'>
            <div className='discover__left__Welcome'></div>
            <div className='discover__left__horizontalWelcome'></div>

            <h1 className='discoverHeadingWelcome'>{sectionContent?.heading || <WelcomeSecondHeadingSkeleton />}</h1>
            {/* <h1 className='discoverHeadingWelcome'>
              <WelcomeSecondHeadingSkeleton />
            </h1> */}

            <div className='discover__left-mid u-flex u-justify-between'>
              <div className='discover__left-mid__image u-flex-1'>
                <img
                  delayMethod='debounce'
                  delayTime={1000}
                  effect='black-and-white'
                  style={{ position: 'absolute', top: '20%', left: '1%' }}
                  className='discover__left-mid__icon'
                  src={discoverIcon}
                  alt='Discover Icon'
                />
                <img
                  style={{ position: 'absolute', top: '12%', left: '-9%' }}
                  className='discover__left-mid__icon'
                  src={DiscoverIconTwo}
                  alt='Discover Icon'
                />
              </div>
              {/* <img
                  delayMethod="debounce"
                  delayTime={1000}
                  effect="black-and-white" className='discover__plus-divider' src={PlusDivider} alt='Plus Divider' /> */}
              <div className='discover__left-mid__text'>
                {sectionContent?.content ? (
                  <div className='discover__left-mid__mid discover__left-mid__mid--welcome'>{parse(sectionContent?.content)}</div>
                ) : (
                  <WelcomeSecondTextSkeleton />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='discover-mob u-container-1180 u-mx-auto'>
        {/* <div className='discover-mob__top'>
          <img
                  delayMethod="debounce"
                  delayTime={1000}
                  effect="black-and-white" src={Img02} alt='' />
        </div> */}
        <div className='discover-mob__mid'>
          <div className='discover-mob__mid__verticalWelcome'></div>
          <div className='mob__mid__horizontalWelcome'></div>
          {/* <h1 className='discover-mob__headingWelcome'>
            <WelcomeSecondHeadingMobSkeleton />
          </h1> */}
          <h1 className='discover-mob__headingWelcome'>{sectionContent?.heading || <WelcomeSecondHeadingMobSkeleton />}</h1>

          <div className='discover-mob__text'>
            {/* {sectionContent?.content ? <WelcomeSecondTextMobSkeleton /> : <WelcomeSecondTextMobSkeleton />} */}
            {sectionContent?.content ? parse(sectionContent?.content) : <WelcomeSecondTextMobSkeleton />}
          </div>
        </div>

        {/* <div className='discover-mob__bottom'>
          <img
                  delayMethod="debounce"
                  delayTime={1000}
                  effect="black-and-white"src={Img03} alt='' />
        </div> */}
      </div>
    </>
  )
}

export default WelcomeSecondSection
