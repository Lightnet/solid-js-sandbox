/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from 'solid-js';
import FlipTime from '../components/fliptime/FlipTime';

export default function PageFlipTime(){

  const [count, setCount] = createSignal(0)

  return (<>
    <FlipTime/>
  </>)
};
