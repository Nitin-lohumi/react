function Form({
    answer,Status,handleSubmit,error,setAnswer
}){
    if (Status === 'success') {
        return(<h1>thats is true answer ! NITIN</h1>)
     }
return(
    <>
      <div>
        <h1>GK question</h1>
        <div>  
           <form onSubmit={handleSubmit}> 
           <p> 
           what is your name ? 
          </p> 
           <input type="text"
            value={answer}   
            onChange={(e)=>setAnswer(e.target.value)}
            disabled={Status === 'submiting'}
            placeholder="Enter your answer" />
            <button disabled={answer.length === 0 || Status === 'submiting'}>
            Submit
           </button>
            {error !== null? error !== null &&
          <p className="Error">
            {error.message}
          </p>:"" }
           </form>
        </div>
      </div>
    </>
)
}
export default Form;