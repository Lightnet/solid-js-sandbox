/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

// import "../styles.css";

import { lazy } from 'solid-js';
import { Router, Routes, Route } from '@solidjs/router';

import ThemeProvider from "./theme/ThemeProvider";
import AuthProvider from "./auth/api/AuthProvider";
import NotifyProvider from "./notify/NotifyProvider"
import NotifyManager from './notify/NotifyManager';

import IndexMenus from "./IndexMenus";

const Home = lazy(() => import('../pages/index'))
const About = lazy(() => import('../pages/about'))
//const SignIn = lazy(() => import('./components/auth/surrealdb/SignIn'))
//const SignUp = lazy(() => import('./components/auth/surrealdb/SignUp'))
//const SignOut = lazy(() => import('./components/auth/surrealdb/SignOut'))
const TestLab = lazy(() => import('../pages/testlab'))
const ToDoList = lazy(() => import('../pages/todolist'))
//const SurrealDB = lazy(() => import('./pages/surrealdb'))
const Account = lazy(() => import('../pages/account'))
const Blog = lazy(() => import('../pages/blog'))

const HelloApp = () => {
  return (<label></label>)
};
/*
<Route path="/signin" component={SignIn}/>
<Route path="/signup" component={SignUp}/>
<Route path="/signout" component={SignOut}/>
<Route path="/surrealdb" component={SurrealDB}/>
*/

const RouterApp = () => {
  return (
  <Router>
    <IndexMenus/>
    <Routes>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/account" component={Account}/>
      <Route path="/todolist" component={ToDoList}/>
      <Route path="/testlab" component={TestLab}/>
    </Routes>
  </Router>);
};

export default function RenderApp(){
  //const Route = useRoutes(routes);
  //<IndexMenus/>
  //<div>This site was made with Solid</div>
  return (<>
  <ThemeProvider>
    <NotifyProvider>
      <AuthProvider>
        <RouterApp/>
        <NotifyManager/>
      </AuthProvider>
    </NotifyProvider>
  </ThemeProvider>
</>);
};