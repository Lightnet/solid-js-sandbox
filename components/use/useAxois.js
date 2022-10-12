/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

// https://axios-http.com/docs/interceptors

import axios from "axios";

const useAxois = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  //headers: {'X-Custom-Header': 'foobar'}
});

// Add a request interceptor
useAxois.interceptors.request.use(function (config) {
  // Do something before request is sent
  //console.log(config)
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
useAxois.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  //console.log(response)
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default useAxois;