const DEFAULT_STATE = {
  users: [],
  user: {},
  albums: [],
  album: {},
  photos: [],
};

export const reducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case 'ALBUMS':
      return {
        ...state,
        albums: payload,
      };
    case 'ALBUM':
      return {
        ...state,
        album: payload,
      };
    case 'PHOTOS':
      return {
        ...state,
        photos: payload,
      };
    case 'USERS':
      return {
        ...state,
        users: payload,
      };
    case 'USER':
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};
