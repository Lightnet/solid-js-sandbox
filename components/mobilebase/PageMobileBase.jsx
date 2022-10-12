/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/
/*
  check for:
  base exist
  load exist
  error on server for error database
*/


import { createEffect, createMemo, createSignal } from 'solid-js';
import useAxois from '../use/useAxois';
import { useMobileBase } from './MobileBaseProvider';
import CreateBase from './ui/CreateBase';
//import GridView from './ui/GridView';
//import HomeBase from './ui/HomeBase';
import MIPanelView from './ui/MIPanelView';

export default function PageMobileBase(props){

  const [isBase, setIsBase] = createSignal(false)
  const [isLoading, setIsLoading] = createSignal(true)
  const [error, setError] = createSignal(null)
  const { setBaseInfo } = useMobileBase();

  function onChange(_data){
    if(_data){
      //console.log("PageMobileBase onChange:", _data);
      setBaseInfo(_data);
      setIsBase(true);
    }
  }

  async function getBase(){
    try{
      useAxois({
        url:'/api/mobilebase/home',
        method:'GET'
      }).then(resp=>{
        console.log(resp.data)
        if(resp.data?.api!=null){
          if(resp.data.api=='NOBASE'){
            setError(null)
            setIsBase(false);
            setIsLoading(false)
          }
          if(resp.data.api=='HOMEBASE'){
            setError(null)
            onChange(resp.data.homebase)
            setIsLoading(false)
            
          }
          if(resp.data.api=='ERROR'){
            setError('Error Server!')
            setIsLoading(false)
          }
        }else{
          setError('Error Server!')
          setIsLoading(false)
        }
      }).catch(e=>{
        console.log(e)
        setError('Error Server!')
        setIsLoading(false)
      })
      
    }catch(e){
      console.log(e)
      setIsLoading(false)
    }
  }

  getBase();

  const checkingBase = createMemo(()=>{
    if(isBase()){
      return (<MIPanelView></MIPanelView>)
    }else{
      //return (<label> Hello </label>)
      return (<CreateBase onChange={onChange} />)
    }
  });

  //createEffect(()=>{
    //console.log(isLoading())
    //console.log(checkingBase())
    //console.log(isBase())
  //})

  return (<>
    {isLoading()?(<>
      <label> Loading... </label>
    </>):(<>
      {checkingBase}
    </>)}
  </>)
};
