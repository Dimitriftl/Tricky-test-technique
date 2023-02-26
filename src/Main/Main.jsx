import { useEffect, useState } from "react";
import CardContainer from "../CardPart/CardContainer.jsx";
import TimerPart from "../TimerPart/TimerPart";
import wavesSvg from "../media/Waves-background.svg"
import "./Main.css";
import "./MainModal.css";
import "./LoseMomal.css"
let interval = null;

function Main() {

  // -----------TIMER----------
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;



  function startTimer() {
    setIsTimerRunning(true);
    if (seconds === 0) {
      setSeconds(59);
      setMinutes((minutes) => minutes - 1);
    }
    interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    if(seconds && minutes === 0) {
      pauseTimer()
    }
    return () => clearInterval(interval);
  }

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (seconds === 0 && isTimerRunning) {
        setSeconds(59);
        setMinutes((minutes) => minutes - 1);
      } 
    }, 1000);

    if(setIsTimerRunning && minutes < 0) {
      pauseTimer()
      setMinutes(10)
      setSeconds(0)
      toggleLoseModal()
    }
  }, [seconds])

  function pauseTimer() {
    setIsTimerRunning(false);
    clearInterval(interval);
    console.log("pauseTimer");
  }

  const [loseModal, setLoseModal] = useState(false)

  function toggleLoseModal () {
    setLoseModal(!loseModal)
  }

  // -------------MODAL D'ENTRER DE JEU-----------------
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="Main">
      <div className="backgroundSvg">
        <img src={wavesSvg} alt="Waves" />
      </div>
      {modal && (
        <div className="MainModal">
          <div className="overlay"></div>
          <div className="modal-content">
            <div className="modalTitle">
            <h2>L'entrée - Escape room</h2>
            </div>
            <div className="info">
            <h3>Informations</h3>
              <p>Bonjour, vous êtes sur le test technique de Dimitri pour l'entreprise Tricky, l'idée de ce test et d'avoir une dynamique de jeu du style escape room.</p>
              <br />
              <p>L'objectif pour vous est simple, vous avez 10 minutes pour fouiller les éléments du décor, qui sont les cartes à votre droite ou en dessous si vous êtes sur version mobile, afin de trouver le code de la porte car vous êtes actuellement bloqué dans cette maison. <br /> <br /> Si vous ne trouvez pas le code pas de panique, il y a un bouton d'aide qui vous donnera un petit indice. Vous pouvez également mettre le jeu en pause à votre guise</p>
              <br />
              <div className="modalBottom">
                <div className="ModalButtonTitle">
                <h4>ÊTES-VOUS PRÊT À COMMENCER ?</h4>
                </div>
              <button className="buttonCommencer" onClick={()=> { toggleModal(); startTimer()}}>C'est parti !</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {loseModal && (
        <div className="loseModalContainer">
          <div className="overlay"></div>
          <div className="loseModalContent">
            <div className="loseModalTitle">
            <h3> Oh nan... Vous n'avez pas été assez rapide</h3>
            </div>
            <button className="recommencerButton" onClick={() => {toggleLoseModal(); startTimer() }}>Recommencer</button>
          </div>
        </div>
      )}
      
      <TimerPart 
      timerMinutes= {timerMinutes}
      timerSeconds = {timerSeconds} 
      setIsTimerRunning ={setIsTimerRunning}
      interval ={interval}
      startTimer = {startTimer}
      />
      <CardContainer />
      
    </div>
  );
}

export default Main;
