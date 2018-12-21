export const userSongsSelector = (user, state) => {
    let userSongs = [];
    Object.values(state.entities.songs).forEach(song => {
        if (song.userId === user.id) {
            userSongs.push(song);
        }
    });
    return userSongs;
};

export const commentUserSelector = (comment, state) => {
    let commentUser;
    Object.values(state.entities.users).forEach(user => {
        if (user.id === comment.userId)
            commentUser = user;
    });
    return commentUser;
};