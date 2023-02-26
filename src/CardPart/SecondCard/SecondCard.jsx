import React, { useState } from "react";
import "../Cards.css";
import "../CardsModal.css";

const SecondCard = () => {
  const [secondCardModal, setSecondCardModal] = useState(false);

  const toggleModal = () => {
    setSecondCardModal(!secondCardModal);
  };

  return (
    <div className="CardContainer">
      {secondCardModal && (
        <div className="modalCardContainer">
          <div className="modalOverlay"></div>
          <div className="cardsModalContent">
            <div className="cardModalTitle">
              <h1>Le tableau</h1>
              </div>
              <div className="cardModalText">
                <p className="foundTxt">
                  Vous avez trouvé un bout de papier caché derrière ce tableau avec des lettres dans le
                  désordre.
                </p>
                <br />
                <p>Il y est écrit : </p>
                <br />
                <p className="mdptext">"Y R I"</p>
              </div>
              <button onClick={toggleModal} className="closeCardsButton">
                Fermer
              </button>
            
          </div>
        </div>
      )}
      <div className="cardTitle">
        <h3>Tableau</h3>
      </div>
      <div className="cardText">
        <p>Ce tableau semble légèrement penché.</p>
      </div>
      <button className="buttonOpenModal" onClick={toggleModal}>Regarder</button>
    </div>
  );
};

export default SecondCard;
