import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import { watchAll } from '../sagas';
// ======== Compose redux dev tool with applyMiddleware ========
const saga = createSagaMiddleware();
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(saga),
  // other store enhancers if any
);
const store = createStore(reducers, enhancer);

saga.run(watchAll);

export default store;

// import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
// import reducers from './reducers';
// import createSagaMiddleware from 'redux-saga';
// import { fetchSongs } from '../sagas/songs';

// // const logger = createLogger();
// const saga = createSagaMiddleware();

// const store = createStore(
//   reducers,
//   undefined,
//   applyMiddleware(saga)
// );

// saga.run(fetchSongs);

// export default store;