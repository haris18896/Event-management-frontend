import { display } from "@mui/system";
import { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import close from "../../assets/images/close.png"

import "../../styles/covidmodal.css"


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "auto",
    height: "100vh",
    width: "100vw",
    transform: "translate(-50%, -50%)",
    background: "black",
    opacity:"0.9",
    display:"flex"


   
  },
};

const CovidUpdates = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { language } = useSelector(state => state.language)

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }



  return (
    <div className="covid-updates">
      <div className="covid-updates__container">
        <p  className="covid-updates__notification">
          
           {language === 'en' ? 'For the latest Covid update' : language === 'nl' ? 'Voor de laatste Covid update' : 'Für das neueste Covid-Update'}
           {" "}

           <span style={{textDecoration:"underline",cursor:"pointer"}} onClick={openModal}  >
          {language === 'en' ? 'Click here' : language === 'nl' ? 'Klik hier' : 'Klicke hier'} {"  "}
          </span>
        </p>

        {/* <a onClick={openModal} className="covid-updates__link" href>
          Click Here
        </a> */}
      </div>
      <Modal
      
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        
       
        <div className="modalDivWrapper">
        
          <p
          className="CovidUpdatesModalText"
        
          >
          
          <img style={{width:"100%",height:"100%"}} src={close}  style={{position:"absolute",right:"2%",top:"4%"}} onClick={closeModal}/>
            

          {language === 'en' ? 'We follow the guidelines of the RIVM, which means that the Christmas market is a transfer location and we test in our catering industry for a valid QR code (or a negative test result)...' : language === 'nl' ? 'Wij volgen de richtlijnen van het RIVM dat betekent dat we bij de ingang van het event testen op een geldige QR code (dan wel een negatief testresultaat Uiteraard volgen we verder de regels die ons door de overheid worden opgelegd...' : 'Wir folgen den Richtlinien des RIVM, heißt wir testen am Eingang der Veranstaltung auf einen gültigen QR-Code (bzw. ein negatives Testergebnis). Natürlich folgen Wir die von der Regierung auferlegten Regeln...'}
            </p>
       
        </div>
      </Modal>
    </div>
  );
};

export default CovidUpdates;
