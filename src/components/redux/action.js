import {
  getAlbums,
  getUsers,
  getPhotos,
  getUser,
  getAlbum,
} from '../routers/utils/api';

export const actionUser = (id) => async (dispatch) => {
  try {
    const { user } = await getUser(id);
    dispatch({ type: 'USER', payload: user });
  } catch (e) {
    console.log(e);
  }
};

export const actionUsers = () => async (dispatch) => {
  try {
    const { users } = await getUsers();
    dispatch({ type: 'USERS', payload: users });
  } catch (e) {
    console.log(e);
  }
};

export const actionAlbums = () => async (dispatch) => {
  try {
    const { albums } = await getAlbums();
    dispatch({ type: 'ALBUMS', payload: albums });
  } catch (e) {
    console.log(e);
  }
};

export const actionAlbum = (id) => async (dispatch) => {
  try {
    const { album } = await getAlbum(id);
    dispatch({ type: 'ALBUM', payload: album });
  } catch (e) {
    console.log(e);
  }
};

export const actionPhotos = (id) => async (dispatch) => {
  try {
    const { photos } = await getPhotos(id);
    dispatch({ type: 'PHOTOS', payload: photos });
  } catch (e) {
    console.log(e);
  }
};
