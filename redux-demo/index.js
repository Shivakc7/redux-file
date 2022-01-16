
const redux = require( 'redux')
const reduxLogger = require('redux-logger')


const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()



const buy_cake = "buy_cake";
const buy_iceCreams = "buy_iceCreams";

function buyIceCreams() {
    return  {
        type: buy_iceCreams,
        info: "Second redux action"
    }
}


function buyCake() {
    return {
        type: buy_cake,
        info: "First redux action"
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCreams: 10
}

// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case buy_cake : return {
//             ...state,
//             numOfCakes : state.numOfCakes - 1
//         }
//         case buy_iceCreams : return {
//             ...state,
//             numOfIceCreams : state.numOfIceCreams - 1
//         }
//         default : return state;
//     }
 
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case buy_cake : return {
            ...state,
            numOfCakes : state.numOfCakes - 1
        }
        
        default : return state;
    }
 
}

const IceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
       
        case buy_iceCreams : return {
            ...state,
            numOfIceCreams : state.numOfIceCreams - 1
        }
        default : return state;
    }
 
}

const rootReducer = combineReducers({
    cake : cakeReducer,
    IceCream: IceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCreams())
store.dispatch(buyIceCreams())
store.dispatch(buyIceCreams())
unsubscribe()