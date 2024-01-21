import {
  Middleware,
  MiddlewareAPI,
  combineReducers,
  configureStore,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import { baseService } from '../services';
// import useToast from "@/hooks/useToast";

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => next => action => {
    // const { showErrorToast } = useToast();
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
      if (action.payload.status === 'FETCH_ERROR') {
        // showErrorToast(action.payload.error);
      } else if (action.payload.status === 'PARSING_ERROR') {
        // showErrorToast(action.payload.data);
      } else {
        if (action.payload.data.message) {
          // showErrorToast(action.payload.data.message);
        } else if (Object.hasOwn(action.payload.data, 'error')) {
        }
        // showErrorToast(action.payload.data.error);

        // need to handle one other senario like
        // has errors property
      }
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
