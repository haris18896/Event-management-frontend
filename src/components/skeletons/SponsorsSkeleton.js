import React from 'react'
import Skeleton from '@mui/material/Skeleton'

function SponsorsSkeleton() {
  return (
    <div className='sponsors u-container-1180 u-mx-auto'>
      <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.556)' }} />

      <div className='sponsors__list'>
        <div className='sponsors__logo'>
          <Skeleton
            sx={{ bgcolor: 'rgba(108, 115, 133, 0.556)' }}
            className='skeleton__sponsors'
            variant='rectangular'
            height={50}
            width={150}
          />
        </div>

        <div className='sponsors__logo'>
          <Skeleton
            sx={{ bgcolor: 'rgba(108, 115, 133, 0.556)' }}
            className='skeleton__sponsors'
            variant='rectangular'
            height={50}
            width={150}
          />
        </div>

        <div className='sponsors__logo'>
          <Skeleton
            sx={{ bgcolor: 'rgba(108, 115, 133, 0.556)' }}
            className='skeleton__sponsors'
            variant='rectangular'
            height={50}
            width={150}
          />
        </div>

        <div className='sponsors__logo'>
          <Skeleton
            sx={{ bgcolor: 'rgba(108, 115, 133, 0.556)' }}
            className='skeleton__sponsors'
            variant='rectangular'
            height={50}
            width={150}
          />
        </div>

        <div className='sponsors__logo'>
          <Skeleton
            sx={{ bgcolor: 'rgba(108, 115, 133, 0.556)' }}
            className='skeleton__sponsors'
            variant='rectangular'
            height={50}
            width={150}
          />
        </div>
      </div>
    </div>
  )
}

export default SponsorsSkeleton
