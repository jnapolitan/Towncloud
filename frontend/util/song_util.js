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

export const createSong = (songData) => (
    $.ajax({
        method: 'POST',
        url: 'api/songs',
        data: songData,
        contentType: false,
        processData: false
    })
);

export const updateSong = (songData, id) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/songs/${id}`,
        data: songData,
        contentType: false,
        processData: false
    })
);

export const deleteSong = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/songs/${id}`
    })
);



