import Skeleton from '@mui/material/Skeleton'
const BuyTicketsSkeleton = () => {
  return (
    <div className='buy-tickets '>
      <div className='u-container-1180 u-mx-auto'>
        <div className='buy-tickets__content'>
          <div className='buy-tickets__image'>
            <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='fitContent' height={300} />
          </div>
          <div className='buy-tickets__text'>
            <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='rectangular' height={200} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyTicketsSkeleton
