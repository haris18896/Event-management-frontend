import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleFetchSponsors, handleFetchTotalSponsors } from '../../Actions/SponsorAction'
import Marquee from 'react-fast-marquee'

const Sponsors = () => {
  const [sortedSponsors, setSortedSponsors] = useState([])
  const { totalSponsorsCount, totalSponsors } = useSelector(state => state.sponsor)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleFetchSponsors())
  }, [])

  useEffect(() => {
    if (totalSponsorsCount) {
      dispatch(handleFetchTotalSponsors(totalSponsorsCount))
    }
  }, [totalSponsorsCount])

  useEffect(() => {
    if (totalSponsors?.length) {
      const temp = totalSponsors
      setSortedSponsors(temp)
    }
  }, [totalSponsors])

  useEffect(() => {
    if (sortedSponsors?.length) {
      console.log(sortedSponsors)
    }
  }, [sortedSponsors])

  return (
    <div className='sponsors'>
      {/* <div className='u-container-1180 u-mx-auto'>
      </div> */}
      <hr className='sponsors-hr' />
      <h1 className='sponsors__heading u-text-center'>Sponsors</h1>
      <div className='sponsors__list'>
        <Marquee gradient={false} pauseOnHover={true} speed={50}>
          {sortedSponsors?.map(sponsor => (
            <div className='sponsors__logo'>
              <a target='_blank' href={sponsor.websiteUrl}>
                <img src={sponsor.logoUrl} alt='sponsor' />
              </a>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default Sponsors
