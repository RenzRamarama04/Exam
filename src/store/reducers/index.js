import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import social from './social';

const imagePersistConfig = {
  key: 'social',
  storage,
};

const rootReducer = combineReducers({
social: persistReducer(imagePersistConfig, social),
});

export default rootReducer;
