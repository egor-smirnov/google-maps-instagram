import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

function finalCreateStore() {
    return compose(
        applyMiddleware(thunk),
        applyMiddleware(createLogger())
    )(createStore);
}

export default function configureStore(history, initialState) {
    const store = finalCreateStore()(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}