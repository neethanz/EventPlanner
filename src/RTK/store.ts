import {
  Middleware,
  MiddlewareAPI,
  combineReducers,
  configureStore,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {baseService} from '../services';

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => next => action => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
      // macro level error handling
    }
    return next(action);
  };

const combinedReducer = combineReducers({
  [baseService.reducerPath]: baseService.reducer,
});

const store = configureStore({
  reducer: combinedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat([
      rtkQueryErrorLogger,
      baseService.middleware,
    ]),
});
setupListeners(store.dispatch);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
