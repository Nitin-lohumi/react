import { useState } from 'react'
import './App.css'
import Form from './component/Form'
function App() {
  const [Status,setStatus] = useState("typing"); 
  const [error, setError] = useState(null);
  const [answer, setAnswer] = useState('');
  async function handleSubmit(e){
    e.preventDefault();
   setStatus("submiting");
   try{
    await submitFrom(answer);
    setStatus("success");
    setAnswer("");
   }
   catch(error){
    setStatus("typing");
    setError(error);
    setAnswer("");
   }
  }
  function submitFrom(answer){
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        let shouldError = answer.toLowerCase() !== 'nitin';
        if(shouldError){
          rej(new Error("you enter  "+ answer+ " wrong answer  .. Try again!"));
        }
        else{
          res();
        }
      },1000);
    });
  }
  return (
    <>
      <Form answer={answer} error={error} Status={Status} handleSubmit={handleSubmit} setAnswer={setAnswer}/>
    </>
  )
}

export default App
