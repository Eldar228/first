import { combineReducers } from 'redux';
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import players from './reducers/players';

export default combineReducers({
    flashMessages,
    auth,
    players
});