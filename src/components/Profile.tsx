import styles from '../styles/pages/Profile.module.css';


export function Profile(){
    return (
        <div className = {styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/52716819?v=4" alt="Jornay"/>
            <div>
                <strong>Eu Lucas</strong> 
                <p>
                    <img src="icons/level.svg" alt="level"/>    
                    Level 1 
                </p>
            </div>
        </div>

    );
}