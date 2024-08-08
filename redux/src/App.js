import './App.css';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  let  inputRef=useRef();
  let dispatch=useDispatch();
  let storeObj=useSelector((store)=>{
    return store;
  })
  return (
    <div className="App">
     <form>
      <input ref={inputRef}></input>
      <button type="button"
      onClick={()=>{
      dispatch({type:"samsungmobiles",data:inputRef.current.value});
      }}>samsungmobiles</button>

      <button type="button"
      onClick={()=>{
      dispatch({type:"oneplusmobiles",data:inputRef.current.value});
      }}>oneplusmobiles</button>

      <button type="button"
      onClick={()=>{
      dispatch({type:"iphone",data:inputRef.current.value});
      }}>iphone</button>

<hr></hr>      
<h2>Samsungmobiles:{storeObj.samsungmobiles}</h2>
<h2>Oneplusmobiles:{storeObj.oneplusmobiles}</h2>
<h2>Iphone:{storeObj.iphone}</h2>

     </form>
    </div>
  );
}

export default App;
