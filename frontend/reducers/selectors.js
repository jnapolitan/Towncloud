export const userSongsSelector = (user, state) => {
    let userSongs = [];
    Object.values(state.entities.songs).forEach(song => {
        if (song.userId === user.id) {
            userSongs.push(song);
        }
    });
    return userSongs;
};