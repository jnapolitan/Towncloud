import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import songErrorsReducer from './song_errors_reducer';
import commentErrorsReducer from './comment_errors_reducer';

export default combineReducers({
    session: sessionErrorsReducer,
    song: songErrorsReducer,
    comment: commentErrorsReducer
});