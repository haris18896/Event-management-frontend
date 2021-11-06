// import ContactDetails from '../components/contact-details'
import React, { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../Actions/PageAction'
import { handleFetchPageSection } from '../Actions/PageSectionsAction'
import ContactForm from '../components/contact-form'
import ContactDetailsSkeleton from '../components/skeletons/ContactDetailsSkeleton'
import WelcomeSkeleton from '../components/skeletons/WelcomeSkeleton'
import Sponsors from '../components/sponsors'

const ContactDetails = lazy(() => import('../components/contact-details/index'))

const Contact = () => {
  const { language } = useSelector(state => state.language)
  const { pageId } = useSelector(state => state.page)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changePage('contact'))
  }, [])

  useEffect(() => {
    if (language && pageId) {
      dispatch(handleFetchPageSection(pageId, language))
    }
  }, [language, pageId])
  return (
    <>
      <Suspense fallback={<ContactDetailsSkeleton />}>
        <ContactDetails />
      </Suspense>

      {/* <ContactDetailsSkeleton /> */}
      <ContactForm />
      {/* <Discover />
        <Feature />
        <Plan /> */}
      <Sponsors />
    </>
  )
}

export default Contact
