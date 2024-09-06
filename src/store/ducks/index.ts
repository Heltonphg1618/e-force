import { combineReducers } from 'redux';
import app from './app';
import excersices from './exercises';

const reducers = combineReducers({
  app,
  excersices,
});

export default reducers;
