/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

// import "../styles.css";

import { lazy } from 'solid-js';
import { Router, Routes, Route } from '@solidjs/router';

import ThemeProvider from "./theme/ThemeProvider";
import NotifyProvider from "./notify/NotifyProvider"
import NotifyManager from './notify/NotifyManager';

import IndexMenus from "./IndexMenus";

//import AuthProvider from "./auth/api/AuthProvider";
//const SignIn = lazy(() => import('./components/auth/surrealdb/SignIn'))
//const SignUp = lazy(() => import('./components/auth/surrealdb/SignUp'))
//const SignOut = lazy(() => import('./components/auth/surrealdb/SignOut'))

import AuthProvider from "./auth/api/AuthProvider.jsx";
const SignIn = lazy(() => import('./auth/api/SignIn.jsx'))
const SignUp = lazy(() => import('./auth/api/SignUp.jsx'))
const SignOut = lazy(() => import('./auth/api/SignOut.jsx'))

const Home = lazy(() => import('../pages/index'))
const About = lazy(() => import('../pages/about'))
const TestLab = lazy(() => import('../pages/testlab'))
const ToDoList = lazy(() => import('../pages/todolist'))
//const SurrealDB = lazy(() => import('./pages/surrealdb'))
const Account = lazy(() => import('../pages/account'))
const Blog = lazy(() => import('../pages/blog'))
const PageMobileBase = lazy(() => import('../pages/mobilebase'))
const PageThreejs = lazy(() => import('../pages/threejs'))
const PageThreeCSS = lazy(() => import('../pages/threecss'))
const PageUICSS = lazy(() => import('../pages/uicss'))
const PageExamples = lazy(() => import('../pages/examples'))
const PageAdmin = lazy(() => import('../pages/admin'))
const PageFlipTime = lazy(() => import('../pages/fliptime'))

//const HelloApp = () => {
//  return (<label></label>)
//};
/*

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
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/signout" component={SignOut}/>
      <Route path="/mobilebase" component={PageMobileBase}/>
      <Route path="/threejs" component={PageThreejs}/>
      <Route path="/threecss" component={PageThreeCSS}/>
      <Route path="/uicss" component={PageUICSS}/>
      <Route path="/examples" component={PageExamples}/>
      <Route path="/admin" component={PageAdmin}/>
      <Route path="/fliptime" component={PageFlipTime}/>
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
