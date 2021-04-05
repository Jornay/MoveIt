import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    const { activeChallenge} = useContext(ChallengeContext);


    const contextData = useContext(ChallengeContext)

    return(
        <div className = {styles.challengeBoxContainer}>
            { activeChallenge ?  (
                    <div className = {styles.challengeActive}>
                        <header>Ganhe {activeChallenge.amount} xp</header>

                        <main> 
                            <img src={`icons/${activeChallenge.type}.svg`} />
                            <strong>Novo desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>

                        <footer>
                            <button 
                            type="button"
                            className = {styles.challengeFailedbutton} 
                            onClick={contextData.resetChallenge}
                            >
                                Falho
                            </button>
                            
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