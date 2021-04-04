import {createContext, ReactNode, useState} from 'react';


interface ChallengeContextData{
    level: number;
    currentExperience : number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;

}

interface ChallengeProviderProps{
    children: ReactNode;
}

export const ChallengeContext = createContext({ } as ChallengeContextData);


export function ChallengeProvider({ children } : ChallengeProviderProps){
    
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted,setChallengesCompleted] = useState(0);

    function levelUp(){
        setLevel(level + 1); 
    }

    function startNewChallenge(){
        
    }
    
    return(
        <ChallengeContext.Provider value={{ 
            level,
            currentExperience, 
            challengesCompleted, 
            levelUp,
            startNewChallenge
            }}>
            {children}
        </ChallengeContext.Provider>
    )
}