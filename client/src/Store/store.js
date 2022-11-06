import { applyMiddleware, createStore } from "redux";
import rootReducer  from "../Reducer/reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


export let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

