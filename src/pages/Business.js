import React, { lazy, Suspense, useEffect } from 'react'
import SponsorsSkeleton from '../components/skeletons/SponsorsSkeleton'
import WelcomeSkeleton from '../components/skeletons/WelcomeSkeleton'

import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../Actions/PageAction'
import { handleFetchPageSection } from '../Actions/PageSectionsAction'
import BrochureSkeleton from '../components/skeletons/BrochureSkeleton'

const Brochure = lazy(() => import('../components/de_Brochure'))
const Sponsors = lazy(() => import('../components/sponsors'))

function Business() {
  const { language } = useSelector(state => state.language)
  const { pageId } = useSelector(state => state.page)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changePage('business'))
  }, [])

  useEffect(() => {
    if (language && pageId) {
      dispatch(handleFetchPageSection(pageId, language))
    }
  }, [language, pageId])
  return (
    <>
      <Suspense fallback={<BrochureSkeleton />}>
        <Brochure />
      </Suspense>

      <Suspense fallback={<SponsorsSkeleton />}>
        <Sponsors />
      </Suspense>
    </>
  )
}

export default Business
