import styles from './Editor.module.css';
import { useState,useEffect } from 'react';
import Header from '../Header/Header';
import InputControl from '../InputControl/InputControl';
import Output from '../output/Output';
import { useNavigate } from 'react-router-dom';
const Editor=(props)=>{
    const sections = props.sections;
    const[activeSection,setActiveSection]=useState(Object.keys(sections)[0]);
    // const[enteredValue,setEnteredValue]=useState({});
    // const[outputSt,setOutputSt]=useState(false);
    let changeValue = props.changeValue;
    let enteredValue = props.enteredValue;
//     const changeValue=(event)=>{
        
//     setEnteredValue({...enteredValue,[event.target.title]:{...enteredValue[event.target.title],[event.target.name]:event.target.value}});
    
// };

    // let finalData={};
    const workExpBody=(
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                Label="title"
                placeholder="Enter title eg.Frontend Developer"
                onChange={changeValue}
                
                name="title"
                value={enteredValue.workExpBody?.title || ""}
                title="workExpBody"
                ></InputControl>
                 <InputControl
                Label="Company Name"
                placeholder="Enter Company Name eg.Amazon"
                onChange={changeValue}
                name="CompanyName"
                title="workExpBody"
                value={enteredValue.workExpBody?.CompanyName || ""}
                ></InputControl>
            </div>
            <div className={styles.row}>
                <InputControl
                onChange={changeValue}
                value={enteredValue.workExpBody?.CertificateLink || ""}
                name="CertificateLink"
                Label="Certificate Link"
                placeholder="Enter certificate link"
                title="workExpBody"
                ></InputControl>
                 <InputControl
                 onChange={changeValue}
                 name="Location"
                 value={enteredValue.workExpBody?.Location || ""}
                Label="Location"
                title="workExpBody"
                placeholder="Enter location eg.Remote"
                ></InputControl>
            </div>
            <div className={styles.row}>
                <InputControl
                onChange={changeValue}
                name="StartDate"
                    Label="Start Date"
                    value={enteredValue.workExpBody?.StartDate || ""}
                    type="date"
                    title="workExpBody"
                    placeholder="Enter start date of work"
                ></InputControl>
                <InputControl
                onChange={changeValue}
                title="workExpBody"
                value={enteredValue.workExpBody?.EndDate || ""}
                name="EndDate"
                    Label="End Date"
                    type="date"
                    placeholder="Enter End date of work"
                ></InputControl>
            </div>
            <div className={styles.column}>
                <label>Enter Work description</label>
                <InputControl onChange={changeValue} title="workExpBody"
                value={enteredValue.workExpBody?.line1 || ""}
                name="line1" placeholder="line 1"></InputControl>
                <InputControl onChange={changeValue} title="workExpBody"
                value={enteredValue.workExpBody?.line2 || ""}
                name="line2" placeholder="line 2"></InputControl>
                <InputControl onChange={changeValue} title="workExpBody"
                value={enteredValue.workExpBody?.line3 || ""}
                name="line3" placeholder="line 3"></InputControl>
            </div>
        </div>
    );
    
    const projectBody=(
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    Label="title" placeholder="Enter title eg.chat app"
                    onChange={changeValue}
                    title="projectBody"
                    name="title"
                    value={enteredValue.projectBody?.title || ""}
                ></InputControl>
                
            </div>
            <InputControl
                    Label="Overview" placeholder="Enter basic overview of project" onChange={changeValue}
                    title="projectBody"
                    name="Overview"
                    value={enteredValue.projectBody?.Overview || ""}
            ></InputControl>
            <div className={styles.row}>
                <InputControl
                    Label="Deployed Link" placeholder="Enter deployed link of project" 
                    onChange={changeValue}
                    title="projectBody"
                    name="DeployedLink"
                    value={enteredValue.projectBody?.DeployedLink || ""}
                ></InputControl>
                <InputControl
                onChange={changeValue}
                title="projectBody"
                name="GithubLink"
                value={enteredValue.projectBody?.GithubLink || ""}
                    Label="Github link" placeholder="Enter github link of project"
                ></InputControl>
            </div>
            <div className={styles.column}>
                <label>Enter project description</label>
                <InputControl placeholder="line 1" 
                    onChange={changeValue}
                    title="projectBody"
                    name="Line1"
                    value={enteredValue.projectBody?.Line1 || ""}
                ></InputControl>
                <InputControl placeholder="line 2" 
                    onChange={changeValue}
                    title="projectBody"
                    value={enteredValue.projectBody?.Line2 || ""}
                    name="Line2"></InputControl>
                <InputControl placeholder="line 3"
                    onChange={changeValue}
                    title="projectBody"
                    name="Line3"
                    value={enteredValue.projectBody?.Line3 || ""}
                ></InputControl>
            </div>

        </div>
    );
    const educationBody=(
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl Label="Title" placeholder="Enter title eg.B-tech" 
                    onChange={changeValue}
                    title="educationBody"
                    name="title"
                    value={enteredValue.educationBody?.title || ""}
                    >
                </InputControl>
            </div>
            <InputControl
                Label="College/School Name"
                placeholder="Enter name of ur college/school"
                onChange={changeValue}
                    title="educationBody"
                    value={enteredValue.educationBody?.CollegeName || ""}
                    name="CollegeName"
            ></InputControl>
            <div className={styles.row}>
                <InputControl Label="Start Date" type="date" placeholder="Enter start date of education"
                onChange={changeValue}
                title="educationBody"
                name="StartDate"
                value={enteredValue.educationBody?.StartDate || ""}
                >
                </InputControl>
                <InputControl Label="End Date" type="date" placeholder="Enter End date of education"
                onChange={changeValue}
                title="educationBody"
                name="EndDate"
                value={enteredValue.educationBody?.EndDate || ""}
                >
                </InputControl>
            </div>
        </div>
    );
    const basicInfoBody=(
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl Label="Name" placeholder="Enter your full name" 
                    onChange={changeValue}
                    title="basicInfoBody"
                    name="Name"
                    value={enteredValue.basicInfoBody?.Name || ""}
                
                ></InputControl>
                <InputControl Label="Title" placeholder="Enter your title" 
                    onChange={changeValue}
                    title="basicInfoBody"
                    name="title"
                    value={enteredValue.basicInfoBody?.title || ""}></InputControl>
            </div>
            <div className={styles.row}>
                <InputControl Label="Linkedin Link" placeholder="Enter your linkedin profile link"
                    onChange={changeValue}
                    title="basicInfoBody"
                    name="LinkedinLink"
                    value={enteredValue.basicInfoBody?.LinkedinLink || ""}
                ></InputControl>
                <InputControl Label="Github Link" onChange={changeValue}
                    title="basicInfoBody"
                    name="GithubLink" placeholder="Enter your Github profile link"
                    value={enteredValue.basicInfoBody?.GithubLink || ""}
                   ></InputControl>

            </div>
            <div className={styles.row}>
                <InputControl Label="Email" 
                onChange={changeValue}
                title="basicInfoBody"
                name="Email"
                value={enteredValue.basicInfoBody?.Email || ""}
                type="email" placeholder="Enter your email" ></InputControl>
                <InputControl Label="Enter Phone"
                onChange={changeValue}
                title="basicInfoBody"
                name="PhoneNo"
                value={enteredValue.basicInfoBody?.PhoneNo || ""}
                
                type="tel" placeholder="Enter your Contact number"></InputControl>
                
            </div>
        </div>
    );
    const achievementsBody=(
        <div className={styles.detail}>
            <div className={styles.column}>
                <label>List your achievements</label>
                <InputControl placeholder="Line 1" onChange={changeValue}
                    title="achievementsBody"
                    value={enteredValue.achievementsBody?.Line1 || ""}
                    name="Line1"></InputControl>
                <InputControl placeholder="Line 2"
                onChange={changeValue}
                value={enteredValue.achievementsBody?.Line2 || ""}
                title="achievementsBody"
                name="Line2"></InputControl>
                <InputControl placeholder="Line 3"
                onChange={changeValue}
                value={enteredValue.achievementsBody?.Line3 || ""}
                title="achievementsBody"
                name="Line3"></InputControl>
                <InputControl placeholder="Line 4"
                value={enteredValue.achievementsBody?.Line4 || ""}
                onChange={changeValue}
                title="achievementsBody"
                name="Line4"></InputControl>
            </div>
        </div>
    );
    const summaryBody=(
        <div className={styles.detail}>
            <InputControl Label="Summary" placeholder="Enter your objective/summary"
            onChange={changeValue}
            title="summaryBody"
            name="objective"
            value={enteredValue.summaryBody?.objective || ""}
            ></InputControl>
        </div>
    );
    const othersBody=(
        <div className={styles.detail}>
            <InputControl Label="Other" placeholder="Enter something about you"  
            onChange={changeValue}
            title="othersBody"
            value={enteredValue.othersBody?.Other || ""}
            name="Other" ></InputControl>
        </div>
    );
    const navigate = useNavigate();
    const submitHandler=()=>{
        console.log("hello")
        // finalData=enteredValue;
        // setEnteredValue({});
        // setOutputSt(true);
        console.log(enteredValue);
        localStorage.setItem("enteredData",JSON.stringify(enteredValue));
        // console.log(finalData);
        
        alert("ok?");

        navigate('/resume');
    };
    
    
   const generateBody=()=>{
    switch (sections[activeSection]) {
        case sections.basicInfo:return basicInfoBody;
            case sections.workExp:return workExpBody; 
            case sections.project:return projectBody; 
            case sections.education:return educationBody; 
            case sections.achievements:return achievementsBody; 
            case sections.summary:return summaryBody; 
            case sections.other:return othersBody;
            default:return null; 
    }
   }
    
    return(
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    {Object.keys(sections).map((item)=>{
                        return(<div className={`${styles.sections} ${activeSection===item?styles.active:""}`}
                         key={item} onClick={()=>{setActiveSection(item)}}>
                            {sections[item]}
                        </div>)
                    })}
                </div>
                <div className={styles.bodyy}>
                {generateBody()}
                <button className={styles.btn} onClick={submitHandler}>Save</button>
                
                </div>
                </div>
            
        </>
    );
}
export default Editor;