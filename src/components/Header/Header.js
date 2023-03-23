import styles from './Header.module.css'
import resumesvg from '../assets/resumeimg.svg';

const Header=()=>{
    return(
    <div className={styles.container}>    
         <div className={styles.innerContainer1}>
         <p className={styles.heading}>A <span>Resume</span> that stands out !</p>
         <p className={styles.heading}>Make Your Own resume. <span>It's FREE</span></p>
         </div>
        <div className={styles.innerContainer2}>
            <img src={resumesvg} alt='resume'></img>
        </div>  
    </div>
    );

}
export default Header;