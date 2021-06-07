import produce from "immer"
import { createStore } from 'redux'
import actions from "./Redux/action"


const initialState = {
    glasses: [
        { id: '1', type: 'Screws', price: '180', count: '0', check: false },
        { id: '2', type: 'Plastic', price: '150', count: '0', check: false },
        { id: '3', type: 'Metal', price: '165', count: '0', check: false },
        { id: '4', type: 'Half frame', price: '150', count: '0', check: false },
    ],
    dateTurn: {
        day: '',
        mouth: '',
        year: '',
    },
}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'ADD_GLASSES':
            { state.glasses.push(action.payLoad) }
            break;
        case 'UPDATE_PRICE_GLASSES':
            { state.glasses.find(g => g.id == action.payLoad.id).price = action.payLoad }
            break;
        case 'UPDATE_CHECK_GLASSES':
            { state.glasses.find(g => g.id === action.payLoad).check = !state.glasses.find(g => g.id === action.payLoad).check }
            break;
        case 'UPDATE_COUNT_GLASSES':
            { state.glasses.find(g => g.id === action.payLoad.id).count = action.payLoad.count }
            break;
        case 'CHANGE_DATE':
            { state.dateTurn = action.payLoad }
            break;
    }
}, initialState)

const store = createStore(reducer);
window.store = store;
export default store;