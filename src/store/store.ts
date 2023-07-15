import { Action, applyMiddleware, combineReducers, compose, createStore} from 'redux';
import uiReducer from '../reducers/ui/ui.reducers';
import thunk, { ThunkDispatch } from'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    ui :  uiReducer,
 
});

export const store = createStore(reducers,
    composeEnhancers(applyMiddleware(thunk))

);

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = ThunkDispatch<RootState, void, Action>