import {createStore, applyMiddleware, compose} from 'redux';
import {thunk} from 'redux-thunk';
import {promise} from 'redux-promise';
import rootReducer from '../reducers';

let enhancer = compose(
    applyMiddleware(thunk, promise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

function configStore(initialState)
{
    return createStore(rootReducer, initialState, enhancer);
}

export default configStore;