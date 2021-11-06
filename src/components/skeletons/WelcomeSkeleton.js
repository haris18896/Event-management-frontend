import React from 'react'
import Skeleton from '@mui/material/Skeleton'

function WelcomeSkeleton() {
  return (
    <div className='welcome-first u-container-1180 u-mx-auto'>
      <div className='welcome-first__content'>
        <div className='welcome-first__image'>
          {/* <LazyLoadImage effect='blur' src={WelcomeOneUpdated} alt='Image02' /> */}
          <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} />
        </div>
        {/* <div className='welcome-first__text'>
          <div className='welcome-first__mid'>
            <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default WelcomeSkeleton
