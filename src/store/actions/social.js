import {
    GET_SOCIALIMG_REQUEST,
  } from './actiontypes';
  
  export const getSocialImg = data => ({
    type: GET_SOCIALIMG_REQUEST,
    data,
  });