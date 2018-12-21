export const fetchSongComments = (songId) => (
    $.ajax ({
        method: 'GET',
        url: `api/songs/${songId}/comments`
    })
);

export const createComment = (comment, songId) => (
    $.ajax({
        method: 'POST',
        url: `api/songs/${songId}/comments`,
        data: { comment }
    })
);

export const deleteComment = (commentId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/comments/${commentId}`
    })
);