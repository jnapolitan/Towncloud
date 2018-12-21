export const createComment = (songId) => (
    $.ajax({
        method: 'POST',
        url: `api/songs/${songId}/comments`
    })
);

export const deleteComment = (commentId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/comments/${commentId}`
    })
);