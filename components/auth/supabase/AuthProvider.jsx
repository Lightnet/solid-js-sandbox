/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

import { 
  createSignal
, createEffect
, createContext
, useContext 
} from "solid-js";

import { supabase } from '../../../libs/supabase/supabaseclient.js'

const AuthContext = createContext();

export function AuthProvider(props) {
  const [session, setSession] = createSignal(props.session || null),
    value = [
      session,
      {
        setSession: setSession,
        AssignSession(data) {
          setSession(data);
        },
        clearSession() {
          setSession(null);
        }
      }
    ];
  //get data
  createEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  })

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() { return useContext(AuthContext); }