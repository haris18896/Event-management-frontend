import React, { useState, useEffect, lazy, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../Actions/PageAction'
import { handleFetchPageSection } from '../Actions/PageSectionsAction'
import WelcomeFirstSkeleton from '../components/skeletons/WelcomeFirstSkeleton'
import WelcomeSkeleton from '../components/skeletons/WelcomeSkeleton'

import Sponsors from '../components/sponsors'
// import WelcomeFirstSection from '../components/welcome/WelcomeFirstSection'

import WelcomeFourthSection from '../components/welcome/WelcomeFourthsection'
import WelcomeSecondSection from '../components/welcome/WelcomeSecondSection'
import WelcomeThirdSection from '../components/welcome/WelcomeThirdSection'
import '../styles/welcome.css'

const WelcomeFirstSection = lazy(() => import('../components/welcome/WelcomeFirstSection'))

function Welcome() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  })
  const { mobileView } = state

  const { language } = useSelector(state => state.language)
  const { pageId } = useSelector(state => state.page)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changePage('welcome'))
  }, [])

  useEffect(() => {
    if (language && pageId) {
      dispatch(handleFetchPageSection(pageId, language))
    }
  }, [language, pageId])

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1120
        ? setState(prevState => ({ ...prevState, mobileView: true }))
        : setState(prevState => ({ ...prevState, mobileView: false }))
    }

    setResponsiveness()

    window.addEventListener('resize', () => setResponsiveness())
  }, [])

  if (mobileView) {
    return (
      <>
        <Suspense fallback={<WelcomeFirstSkeleton />}>
          <WelcomeFirstSection />
        </Suspense>
        <WelcomeThirdSection />
        <WelcomeSecondSection />
        <WelcomeFourthSection />
        <Sponsors />
      </>
    )
  } else {
    return (
      <>
        <Suspense fallback={<WelcomeFirstSkeleton />}>
          <WelcomeFirstSection />
        </Suspense>
        <WelcomeSecondSection />
        <WelcomeThirdSection />
        <WelcomeFourthSection />
        <Sponsors />
      </>
    )
  }
}

export default Welcome
