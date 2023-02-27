import React, { useState } from "react";
import "./TimerPart.css";
import "./playPopupContainer.css";
import "./HelpPopUp.css";
import salon from "../media/Salon.jpg";

const TimerPart = ({
  timerMinutes,
  timerSeconds,
  pauseTimer,
  setIsTimerRunning,
  interval,
  startTimer,
}) => {
  // PAUSE MODAL

  const [popUp, setPopUp] = useState(false);

  const togglepopUp = () => {
    setPopUp(!popUp);
  };

  //  HELP MODAL

  const [helpPopUp, setHelpPopUp] = useState(false);

  function toggleHelpPopUp() {
    setHelpPopUp(!helpPopUp);
  }

  //  PAUSE TIMER

  function pauseTimer() {
    setIsTimerRunning(false);
    clearInterval(interval);
  }

  return (
    <div className="imageMainContainer">
      <div class="gradiant"></div>
      {/* PAUSE MODAL */}
      {popUp && (
        <div className="playPopupContainer">
          <div className="popupOverlay"></div>
          <div className="playPopupContent">
            <div className="playPopupTitle">
              <h3>Jeu en pause</h3>
            </div>
            <br />
            <p>Voulez-vous reprendre le jeu?</p>
            <button
              onClick={() => {
                togglepopUp();
                startTimer();
              }}
              className="playButton"
            >
              Reprendre
            </button>
          </div>
        </div>
      )}
      {/* HELP MODAL */}
      {helpPopUp && (
        <div className="HelpPopUpContainer">
          <div className="popupOverlay"></div>
          <div className="HelpPopUpContent">
            <div className="HelpPopUpTitle">
              <h3>Besoin d'aide ?</h3>
            </div>
            <h4>Petit Indice</h4>
            <p>
              Si vous avez réussi à trouver les lettres il se pourrait qu'elles
              soient notées dans le désordre. Pour vous aidez avec ça, voici une
              petite précision. Le code fait allusion au nom d'une
              entreprise leader dans les Digitals Rooms Santé en France.
            </p>
            <button onClick={toggleHelpPopUp} className="closeButton">
              OK
            </button>
          </div>
        </div>
      )}
      {/* TIMER PART */}
      <div className="imageContentContainer">
        <div className="imgContainerTitle">
          <h2>L'entrée</h2>
        </div>
        <div className="showTimer">
          <h3>
            {timerMinutes} : {timerSeconds}
          </h3>
        </div>
        <div className="imgSalonContainer">
          <img src={salon} alt="image d'un salon" />
        </div>
        <button
          className="pauseButton"
          onClick={() => {
            pauseTimer();
            togglepopUp();
          }}
        >
          Pause
        </button>
        <button className="helpButton" onClick={toggleHelpPopUp}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TimerPart;
