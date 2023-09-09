import { createStore , combineReducers , applyMiddleware } from "redux" /* createstore - contains all the store of redux , combinereducer -> combine all the reducer */
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import TodoReducer from "./reducers/TodoReducer"



const reducer = combineReducers({
    // this will contail all the reducers
    Todo: TodoReducer,
})

const initialState = {}

const middleWare = [thunk]

const store = createStore(
    reducer,
    initialState,
   composeWithDevTools(applyMiddleware(...middleWare))
)

export default store