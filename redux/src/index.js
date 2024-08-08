import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from "react-redux";



let initialStore={
  samsungmobiles:[],
  oneplusmobiles:[],
  iphone:[],
}

let reducer=(latestStore=initialStore,dispatchedObj)=>{
 console.log("inside reducer fn")
  console.log(dispatchedObj)
  
if(dispatchedObj.type=="samsungmobiles"){
  return{...latestStore,samsungmobiles:latestStore.samsungmobiles.concat(dispatchedObj.data)}
}else if(dispatchedObj.type=="oneplusmobiles"){
  return{...latestStore,oneplusmobiles:latestStore.oneplusmobiles.concat(dispatchedObj.data)}
}else if(dispatchedObj.type=="iphone"){
  return{...latestStore,iphone:latestStore.iphone.concat(dispatchedObj.data)}
}
  return latestStore;

};

let store=createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
 <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
