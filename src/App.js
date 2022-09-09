import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Screen from './components/Screen/Screen';
import ButtonBox from './components/ButtonBox/ButtonBox';
import Button from './components/Button/Button';
import * as math from 'mathjs';

function App(){

//   const [text, setText] = useState("");
//   const [result, setResult] = useState("");

//   const resetInput =() => {
//     setText(" ");
//     setResult(" ");
//   };
// const deleteData = () =>{
//   setText();
// };
// const checkResult = ()=>{
//   const input = text.join(" "); //remove commas

//   setResult(math.evaluate(input));
// };
  
//   const addToText = (val)  => {
//     setText((text) =>[...text, val + " "])
//   };
  // useEffect((event)=>{
  //   event.preventDefault();
  // } )
    //   window.onbeforeunload = function() {
    //     return alert("Are you sure you want to leave?");
    // }

    const btnValues=[
      ["AC", "Del","+-","/"],
      ["7", 8, 9,"x"],
      [4, 5, 6,"+"],
      [1, 2, 3,"-"],
      [0, ".", "="],
];
  return (
    <div className="App">
       <Header />
       <div className='form'>
         <Screen  value={0}/>
         <ButtonBox>
           {
             btnValues.flat().map((btn,i)=>{
               return(
                 <>
                <Button key={i} className={btn === "=" ? "equal" : "" || btn === "AC" ? "reset" : ""} value={btn}/>
                </>
               );
             })
           }
         </ButtonBox>
         {/* <Screen  text={text} result={result}/> */}
         {/* <div className='button-row'>
          <Button className='AC' label={'AC'} handleClick={resetInput}/>
          <Button label={'Del'} handleClick={deleteData}/>
          <Button label={'.'} handleClick={addToText} />
          <Button label={'/'} handleClick={addToText} />
            </div>
            <div className='button-row'>
          <Button label={'7'} handleClick={addToText}/>
      <Button label={'8'} handleClick={addToText}/>
      <Button label={'9'} handleClick={addToText}/>
      <Button label={'+'} handleClick={addToText}/>
            </div>
            <div className='button-row'>
          <Button label={'4'} handleClick={addToText}/>
      <Button label={'5'} handleClick={addToText}/>
      <Button label={'6'} handleClick={addToText} />
      <Button label={'*'} handleClick={addToText}/>
            </div>
            <div className='button-row'>
          <Button label={'1'} handleClick={addToText}/>
      <Button label={'2'} handleClick={addToText}/>
      <Button label={'3'} handleClick={addToText}/>
      <Button label={'-'} handleClick={addToText}/>
            </div>
            <div className='button-row'>
          <Button label={'0'} handleClick={addToText}/>
          <Button label={'='} handleClick={checkResult}/>
            </div> */}
       </div>
       <div>
           
       </div>
       
    </div>
  );
}

export default App;
