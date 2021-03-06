import { useContext, useEffect, useState } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css';


let countdownTimeOut: NodeJS.Timeout;

export function Countdown(){

    const {startNewChallenge} = useContext(ChallengeContext);

    const [time, setTime] = useState(25 * 60)
    const [IsActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    const minutes = Math.floor(time /60);
    const seconds = time % 60;
    
    const [minuteLeft, MinuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeOut);
        setIsActive(false);
        //setTime(25*60);
        setTime(6) 
    }


    useEffect(()  => {
        if(IsActive && time > 0 ){
            countdownTimeOut = setTimeout(() => {
                setTime(time -1); 
            }, 1000)
        } else if (IsActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [IsActive, time])

    return (
        <div>
            <div className = {styles.countdownContainer}>
                <div>
                     <span>{minuteLeft}</span>
                    <span>{MinuteRight}</span>
                </div>
                <span>:</span>
                 <div>
                     <span>{secondLeft}</span>
                     <span>{secondRight}</span>
                </div>
             </div>

             {hasFinished ? (
                <button 
                disabled
                className={styles.CountdownButton}
                >                    
                    Ciclo Concluído <img src="icons/check-circle.svg" alt="Cheked"/>
                </button>
             ) : (
                <> 
                {IsActive ? (
                    <button 
                    type="button"  
                    className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
                    onClick = {resetCountdown}>
                        
                        Abandonar ciclo
                    </button>
                ) : (
                    <button 
                 type="button"  
                 className={styles.CountdownButton}
                 onClick = {startCountdown}>
                     
                     Iniciar um ciclo
                 </button>
                )}    
            </>
             )}

             
        </div>
    )
}