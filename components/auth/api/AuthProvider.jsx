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

const AuthContext = createContext();

export function useAuth() { return useContext(AuthContext); }

export function AuthProvider(props) {
  const [session, setSession] = createSignal(props.session || null),
    value = [
      session,
      {
        setSession: setSession,
        assignSession(data) {
          setSession(data);
        },
        clearSession() {
          setSession(null);
        }
      }
    ];
  //get data changes
  createEffect(() => {

  })

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;