import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';
const store = createStore(
  combineReducers({
    users: reducer,
    user: reducer,
    albums: reducer,
    album: reducer,
  }),
  applyMiddleware(thunk)
);
export default store;
