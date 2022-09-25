/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import "./styles.css";
//import { render } from "solid-js/web";
import { createApp } from 'solid-utils';
import App from "./components/App.jsx"

const dispose = createApp(App).mount('#app')
//const dispose = render(App,document.getElementById('app'))

//console.log(dispose)
//dispose();

if (import.meta.hot) { //< module.hot
  //console.log(import.meta.hot)
  import.meta.hot.accept() //< module.hot.accept()
  import.meta.hot.dispose(dispose) //< module.hot.dispose(dispose)
  //import.meta.hot.dispose(()=>{dispose()})
  //console.log("Hot Reload...")
}