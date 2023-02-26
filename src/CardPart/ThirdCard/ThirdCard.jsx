import React, { useState } from "react";
import "../Cards.css";
import "../CardsModal.css";
import "./WinModal.css"

const ThirdCard = () => {

    // Modale de la carte
  const [thirdCardModal, setThirdCardModal] = useState(false);

  const toggleModal = () => {
    setThirdCardModal(!thirdCardModal);
  };

//   Input
const [inputValue, setInputValue] = useState('');
// Modal win
const [winModal, setWinModal] = useState(false)

function preventDefault (event) { 
    event.preventDefault()
    verify()
}

    // Target la value de l'input
  function handleInputChange(event) {
    const {value} = event.target;
    setInputValue(value);
  }

  function verify() {
    if(inputValue === "tricky" || inputValue === "TRICKY" || inputValue === "Tricky"  ) {
        toggleWinModal()
        toggleModal()
    } else { 
        alert("Vous n'avez pas entré le bon code !")
    }
  }


 



  const toggleWinModal = () => {
    setWinModal(!winModal)
  }

  return (
    <div className="CardContainer">
      {thirdCardModal && (
        <div className="modalCardContainer">
          <div onClick={toggleModal} className="modalOverlay"></div>
          <div className="thirdCardModalContent">
            <div className="cardModalTitle">
              <h1>Déverrouiller</h1>
              </div>
              <div className="cardModalText">
                <p>
                  Si vous voulez ouvrir cette porte il va falloir rentrer le bon code.
                </p>  
                <br />
                <form onSubmit={preventDefault}>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                </form>
              </div>
              <div className="divcloseCardsButton">
              <button onClick={() => {verify()}}  className="closeCardsButton">
                Unclock
              </button>
              </div>
              <button onClick={toggleModal} className="fermeButton">Fermer</button>
            
          </div>
        </div>
      )}
      {winModal && (
        <div className="winModalContainer">
            <div className="overlay"></div>
            <div className="winModalContent">
            <h2>🎉FÉLICITATION🎉</h2>
            <p className="Wintxt">vous-avez réussi à résoudre cette énigme qui ma foi était assez tricky. <br /> <br /> En espérant que ce test technique vous aura plu. </p>
            <a href="https://www.linkedin.com/in/dimitri-fontenelle/" target="_blank">https://www.linkedin.com/in/dimitri-fontenelle/</a>
            </div>
        </div>
      )}
      <div className="cardTitle">
        <h3>Code de la porte</h3>
      </div>
      <div className="cardText">
        <p>Avez vous trouvé le code?</p>
      </div>
      <button className="buttonOpenModal" onClick={toggleModal}>Unlock</button>
    </div>
  );
};

export default ThirdCard;
