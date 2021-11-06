import React, { useEffect } from 'react'

// const url = 'https://shop.compoticketing.eu/js/ticketing/compo_ticketing.js?ts='

function Iframes() {
  useEffect(() => {
    window.compoCode = 'E98E79612D23'
    window.compoSalesChannel = 'event'
    let compoScript = document.createElement('script')
    compoScript.type = 'text/javascript'
    compoScript.id = 'compoTicketScript'
    compoScript.src = 'https://shop.compoticketing.eu/js/ticketing/compo_ticketing.js?ts=' + new Date().getTime()
    let compoScriptPosition = document.getElementsByTagName('script')[0]
    compoScriptPosition.parentNode.insertBefore(compoScript, compoScriptPosition)
  }, [])
  return (
    <div className='welcome-first'>
      <div className='u-container-1180 u-mx-auto'>
        <div className='ticketFrame' id='ticketFrame'></div>
      </div>
    </div>
  )
}

export default Iframes
