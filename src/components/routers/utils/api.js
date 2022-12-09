const BASIC_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  const users = await fetch(`${BASIC_URL}/users`).then((r) => {
    if (r.ok) return r.json();
    else console.log('there is no users');
  });
  return { users };
};

export const getAlbums = async () => {
  const albums = await fetch(`${BASIC_URL}/albums`).then((r) => {
    if (r.ok) return r.json();
    else console.log('there is no albums');
  });
  return { albums };
};

export const getUser = async (id) => {
  const user = await fetch(`${BASIC_URL}/users/${id}`).then((r) => {
    if (r.ok) return r.json();
    else console.log('there is no user');
  });
  return { user };
};

export const getAlbum = async (id) => {
  const album = await fetch(`${BASIC_URL}/albums/${id}`).then((r) => {
    if (r.ok) return r.json();
    else console.log('there is no album');
  });
  return { album };
};

export const getPhotos = async (id) => {
  const photos = await fetch(`${BASIC_URL}/albums/${id}/photos`).then((r) => {
    if (r.ok) return r.json();
    else console.log('there is no photos');
  });
  return { photos };
};
