/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

// https://www.w3schools.com/howto/howto_css_flip_card.asp
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_flip_card
// https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d

import { createSignal } from 'solid-js';

import './flipdown.css';

export default function FlipTime(){

  const [flip, setFlip] = createSignal('')

  const btnFlip=()=>{
    setFlip('flip-Forward')
  }

  const btnReset=()=>{
    setFlip('')
  }

  return (<>
    <div class={''}>
      <div class="filp-container">
        <div class={'flip-front ' + flip() + ' '}>
          <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"/>
        </div>

      </div>
    </div>
    <button onClick={btnFlip}> Flip </button>
    <button onClick={btnReset}> Reset </button>
  </>)
};
/*
<div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"/>
        </div>
        <div class="flip-card-back">
          <h1>John Doe</h1> 
          <p>Architect & Engineer</p> 
          <p>We love that guy</p>
        </div>
      </div>
    </div>

*/
