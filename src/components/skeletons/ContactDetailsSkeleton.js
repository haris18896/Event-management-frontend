import Skeleton from '@mui/material/Skeleton'
const ContactDetailsSkeleton = () => {
  return (
    <div className='contact-details'>
      <div className='u-container-1180 u-mx-auto'>
        <div className='contact-details__content'>
          <div className='contact-details__image'>
            <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='fitContent' height={300} />
          </div>
          <div className='contact-details__text'>
            <Skeleton sx={{ bgcolor: 'rgba(108, 115, 133, 0.356)' }} variant='fitContent' height={200} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactDetailsSkeleton
