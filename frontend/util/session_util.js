export const fetchAllUsers = () => (
     $.ajax({
        method: 'GET',
        url: 'api/users'
    })
);

export const fetchUser = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/users/${id}`
    })
);
    

export const createUser = (user) => (
    $.ajax({
        method: 'POST',
        url: 'api/users',
        data: { user }
    })
);

export const createSession = (user) => (
    $.ajax({
        method: 'POST',
        url: 'api/session',
        data: { user }
    })
);

export const deleteSession = () => (
    $.ajax({
        method: 'DELETE',
        url: 'api/session'
    })
);