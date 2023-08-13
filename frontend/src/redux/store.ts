import { legacy_createStore, combineReducers, applyMiddleware, compose, Store } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { messageReducer } from "./message/message.reducer";
import { AnyAction } from "redux";
import { RootState } from "../assets/Data";

// Define the root state type which includes the message state


// Define the type for the store
export type AppStore = Store<RootState, AnyAction>;

// Combine reducers with the proper RootState
export const rootReducer = combineReducers({
  message: messageReducer,
});

// Enhance compose function with Redux DevTools support
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the store with the root reducer and middleware
const store: AppStore = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<RootState, AnyAction>))
);

export default store;
