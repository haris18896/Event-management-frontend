import Skeleton from '@mui/material/Skeleton'
const WelcomeFirstSkeleton = () => {
  return (
    <div className='welcome-first'>
      <div className='u-container-1180 u-mx-auto'>
        <div className='welcome-first__content'>
          <div className='welcome-first__image'>
            <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='rectangular' height={300} />
          </div>
          <div className='welcome-first__text'>
            <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='rectangular' height={230} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeFirstSkeleton

// <div className='buy-tickets '>
//   <div className='u-container-1180 u-mx-auto'>
//     <div className='buy-tickets__content'>
//       <div className='buy-tickets__image'>
//         <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='rectangular' height={300} />
//       </div>
//       <div className='buy-tickets__text'>
//         <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='rectangular' height={230} />
//       </div>
//     </div>
//   </div>
// </div>
