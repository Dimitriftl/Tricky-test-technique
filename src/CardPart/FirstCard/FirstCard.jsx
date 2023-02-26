import React, { useState } from "react";
import "../Cards.css";
import "../CardsModal.css";

const FirstCard = () => {
  const [firstCardModal, setFirtsCardModal] = useState(false);

  const toggleModal = () => {
    setFirtsCardModal(!firstCardModal);
  };

  return (
    <div className="CardContainer">
      {firstCardModal && (
        <div className="modalCardContainer">
          <div onClick={toggleModal} className="modalOverlay"></div>
          <div className="cardsModalContent">
            <div className="cardModalTitle">
              <h1>Le tiroir</h1>
              </div>
              <div className="cardModalText">
                <p className="foundTxt">
                  Vous avez trouver un papier avec des lettres dans le
                  desordre.
                </p>
                <br />
                <p>Il y est écrit : </p>
                
                <p className="mdptext">"T C K"</p>
              </div>
              <button onClick={toggleModal} className="closeCardsButton">
                Fermer
              </button>
            
          </div>
        </div>
      )}
      <div className="cardTitle">
        <h3>Tiroir</h3>
      </div>
      <div className="cardText">
        <p>Ce tiroir semble être entre-ouvert.</p>
      </div>
      <button className="buttonOpenModal" onClick={toggleModal}>Fouiller</button>
    </div>
  );
};

export default FirstCard;
