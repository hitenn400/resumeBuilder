import styles from './InputControl.module.css'
const InputControl=({Label,...props})=>{
    return(
    <>
        <div className={styles.container}>
            {Label && <label>{Label}</label>}
            <input type="text" {...props}/>
        </div>
    </>
    );

}
export default InputControl;