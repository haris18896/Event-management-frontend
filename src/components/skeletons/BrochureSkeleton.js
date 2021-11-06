import Skeleton from '@mui/material/Skeleton'
const BrochureSkeleton = () => {
  return (
    <div className='business-tickets'>
      <div className='u-container-1180 u-mx-auto'>
        <div className='business-tickets__content'>
          <div className='business-tickets__image'>
            <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='fitContent' height={300} />
          </div>
          <div className='business-tickets__text'>
            <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='fitContent' height={200} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrochureSkeleton
