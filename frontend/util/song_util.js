export const fetchAllSongs = () => (
    $.ajax({
        method: 'GET',
        url: 'api/songs'
    })
);

export const fetchSong = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/songs/${id}`
    })
);

export const createSong = (song) => (
    $.ajax({
        method: 'POST',
        url: 'api/songs',
        data: { song }
    })
);

export const updateSong = (song) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/songs/${song.id}`,
        data: { song }
    })
);

export const deleteSong = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/songs/${id}`
    })
);



