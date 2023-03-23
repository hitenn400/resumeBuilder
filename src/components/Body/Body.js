import {useState} from 'react';
import Editor from '../Editor/Editor';
import styles from './Body.module.css';
const Body=(props)=>{
  
    // const[enteredValue,setEnteredValue] = useState({});
    // const changeValue=(event)=>{
        
    //     setEnteredValue({...enteredValue, [event.target.id]:event.target.value});
    //     // console.log(event.target.id);
    //     // console.log(event.target.value);
        
    // }

    const sections={
        basicInfo:"Basic Info",
        workExp:"Work Experience",
        project:"Projects",
        education:"Education",
        achievements:"Achievements",
        summary:"Summary",
        other:"Other",
    };
    return (
    <>
        <div className={styles.container}>
            <h1>Resume Builder</h1>
            <button>Download</button>
            <div className={styles.main}>
                <Editor enteredValue={props.enteredValue} changeValue={props.changeValue} sections={sections} ></Editor>
            </div>
        </div>
    </>
    );
}
export default Body;