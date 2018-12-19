import { 
    TOGGLE_PLAY_PAUSE,
    SEEK_SONG,
    RECEIVE_PLAYER_SONG
} from '../actions/playbar_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session';

const defaultState = {
    audioUrl: '',
    currentSong: null,
    isPlaying: false,
    currentTime: 0,
    songDuration: null,
    seekTime: 0
};

export default (state = defaultState, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_PLAYER_SONG:
            const { currentSong, isPlaying } = state;
            if (!currentSong) {
                const audio = document.getElementById("playbar-audio");
                audio.setAttribute('src', action.song.audioUrl);
                audio.play();
                return Object.assign(
                    {}, 
                    state, { 
                        currentSong: action.song, 
                        isPlaying: true
                    });
            } else if (currentSong && currentSong !== action.song) {
                const audio = document.getElementById("playbar-audio");
                audio.setAttribute('src', action.song.audioUrl);
                audio.play();
                return Object.assign({},
                    state, {
                        currentSong: action.song,
                        isPlaying: true
                    });
            } else if (currentSong && currentSong === action.song) {
                const audio = document.getElementById("playbar-audio");
                if (isPlaying) {
                    audio.pause();
                    return Object.assign({},
                        state, {
                            isPlaying: false
                        });
                } else {
                    audio.play();
                    return Object.assign({},
                        state, {
                            isPlaying: true
                        });
                }
            }
        case TOGGLE_PLAY_PAUSE:
            return Object.assign({}, state, {isPlaying: !state.isPlaying});
        case SEEK_SONG:
            return Object.assign({}, state, {seekTime: action.seconds});
        case LOGOUT_CURRENT_USER:
            return defaultState;
        default:
            return state;
    }
}