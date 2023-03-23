import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
// import Body from './components/Body/Body';
// import Header from './components/Header/Header';
// import Output from './components/output/Output';
import React,{useState,useEffect,useRef} from 'react';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import {useNavigate,Link} from 'react-router-dom'
import {HiArrowRight} from 'react-icons/hi'

import Output from './components/output/Output';
// import 
// const converter = require('number-to-words');

function App(){
  // const[userInfo,setUserInfo]=useState({});
  // const[source,setSource]=useState('');
  // const random_number=Math.floor(Math.random()*10e4);
  // const random_alpha_num=converter.toWords(random_number);
  // const getRandomNumber=(randNum)=>{
  //     return converter.toWords(randNum);
  // }
  // const generateImage=()=>{
  //   setSource(`https://robohash.org/stefan-${random_alpha_num}`)
  //   console.log(source);
  // }
  // useEffect(()=>{
  //   generateImage()
  // },[])
  // const handleChange=(e)=>{
  //   setUserInfo({...userInfo,[e.target.name]:e.target.value})
  // }
  const[enteredValue,setEnteredValue]=useState({});
  const changeValue=(event)=>{
        
    setEnteredValue({...enteredValue,[event.target.title]:{...enteredValue[event.target.title],[event.target.name]:event.target.value}});
    
};
  return (
    <Router>
      <Routes>
      <Route path='/' element={
      <>
      <Header></Header>
      <Body enteredValue={enteredValue} changeValue={changeValue}></Body>
      </>
    }
    />
    <Route path='/resume' element={
      <>
    
    <Output enteredValue={enteredValue}></Output>
    </>
    }/>
    </Routes>
      {/* <Route path='/' element={} */}
      
      
      {/* <Routes>
        <Route path='/' element={<PromptUser userObject={userInfo} imageSource={source} handleChange={handleChange}/>}/>
        <Route path='/resume' element={<Resume userObject={userInfo} imageSource={source}/>}/>
        <Route path='*' element={<NonExistentPage/>}/>
      </Routes>
    </Router> */}
    </Router>
  );
}

export default App;
