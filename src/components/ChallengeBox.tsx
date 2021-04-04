import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    const hasActiveChallenge = true;

    const contextData = useContext(ChallengeContext)
    console.log(contextData)

    return(
        <div className = {styles.challengeBoxContainer}>
            { hasActiveChallenge ?  (
                    <div className = {styles.challengeActive}>
                        <header>Ganhe 400 xp</header>

                        <main>
                            <img src="icons/body.svg" />
                            <strong>Novo desafio</strong>
                            <p>Levante e faça uma caminhada de 3 minutos.</p>
                        </main>

                        <footer>
                            <button 
                            type="button"
                            className = {styles.challengeFailedbutton}
                            >Falho</button>
                            <button 
                            type="button"
                            className = {styles.challengeSuccededbutton}
                            >Completo</button>
                        </footer>
                    </div>
            ): (
                <div className = { styles.challengeNotActive}>
                    <strong>
                        FInalize um ciclo para receber um desafio
                    </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up"/>
                        avance de level completando os desafios
                    </p>
                </div>
            )}
        </div>
    )
}