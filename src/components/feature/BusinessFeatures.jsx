import React from 'react';
import sponsor01 from '../../assets/images/logo-01.png'
import sponsor02 from '../../assets/images/logo-02.png'
import sponsor03 from '../../assets/images/logo-03.png'
import sponsor04 from '../../assets/images/logo-04.png'
import sponsor05 from '../../assets/images/logo-05.png'

function BusinessFeatures() {
    return (
        <div className='feature u-container-1180 u-mx-auto'>
            <hr className='feature-hr' />
            <h1 className='feature__heading u-text-center'>Sponsors</h1>
            <div className='sponsors__list'>
                <div className='sponsors__logo'>
                <img src={sponsor01} alt='sponsor' />
                </div>
                <div className='sponsors__logo'>
                <img src={sponsor02} alt='sponsor' />
                </div>
                <div className='sponsors__logo'>
                <img src={sponsor03} alt='sponsor' />
                </div>
                <div className='sponsors__logo'>
                <img src={sponsor04} alt='sponsor' />
                </div>
                <div className='sponsors__logo'>
                <img src={sponsor05} alt='sponsor' />
                </div>
            </div>
            <div className='sponsors__list visually-hidden'>
                <div className='sponsors__logo'>
                <img src={sponsor01} alt='sponsor' />
                </div>
                <div className='sponsors__logo'>
                <img src={sponsor02} alt='sponsor' />
                </div>
                <div className='sponsors__logo'>
                <img src={sponsor03} alt='sponsor' />
                </div>
                <div className='sponsors__logo'>
                <img src={sponsor04} alt='sponsor' />
                </div>
                <div className='sponsors__logo'>
                <img src={sponsor05} alt='sponsor' />
                </div>
            </div>
        </div>
    )
}

export default BusinessFeatures
