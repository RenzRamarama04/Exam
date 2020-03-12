import {get} from 'lodash'
import {
    GET_SOCIALIMG_REQUEST,
    GET_SOCIALIMG_SUCCESS,
    GET_SOCIALIMG_FAILURE
  } from '../actions/actiontypes';

  const initialState = {
    isFetchingImg: false,
    photos: [],
  };

  const social = (state = initialState, action) => {
    switch (action.type) {
      case GET_SOCIALIMG_REQUEST:
        return {
          ...state,
          isFetchingImg: false,
        };

        case GET_SOCIALIMG_FAILURE:
      return {
        ...state,
        isFetchingImg: false,
      };

      case GET_SOCIALIMG_SUCCESS:
      return {
        ...state,
        isFetchingImg: false,
        photos: get(action, 'payload'),
      };
  
      default:
        return state;
    };
  };
  
  export default social;