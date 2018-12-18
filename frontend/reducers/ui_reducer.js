import { combineReducers } from 'redux';
import PlaybarReducer from './playbar_reducer';

export default combineReducers({
    playbar: PlaybarReducer
});