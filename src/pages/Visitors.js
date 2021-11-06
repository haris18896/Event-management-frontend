// import BuyTickets from '../components/buy-tickets'
import React, { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../Actions/PageAction'
import { handleFetchPageSection } from '../Actions/PageSectionsAction'
import Discover from '../components/discover'
import Feature from '../components/feature'
import Plan from '../components/plan'
import BuyTicketsSkeleton from '../components/skeletons/BuyTicketsSkeleton'
import WelcomeSkeleton from '../components/skeletons/WelcomeSkeleton'
import Sponsors from '../components/sponsors'

const BuyTickets = lazy(() => import('../components/buy-tickets/index'))

const Visitors = () => {
  const { language } = useSelector(state => state.language)
  const { pageId } = useSelector(state => state.page)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changePage('visitors'))
  }, [])

  useEffect(() => {
    if (language && pageId) {
      dispatch(handleFetchPageSection(pageId, language))
    }
  }, [language, pageId])

  return (
    <>
      <Suspense fallback={<BuyTicketsSkeleton />}>
        <BuyTickets />
      </Suspense>
      <Discover />
      <Feature />
      <Plan />
      <Sponsors />
    </>
  )
}

export default Visitors
