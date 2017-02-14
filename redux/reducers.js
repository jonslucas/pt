import { combineReducers } from 'redux';

const exercise = (state, action)=>{
    switch (action.type) {
        case 'ADD_EXERCISE':
            return {
                id: action.id,
                name: action.name,
                details: '',
                completed: false
            };
        case 'COMPLETE_EXERCISE':
            if (state.id != action.id) return state;

            return Object.assign({}, state, {
                details: action.details,
                completed: true
            });
    }
};

const exerciseList = (state = [], action)=>{
    switch (action.type) {
        case 'ADD_EXERCISE':
            return [
                ...state,
                exercise(undefined, action)
            ];
        case 'REMOVE_EXERCISE':
            return [
                ...state.slice(0, action.id),
                ...state.slice(action.index+1)
            ];
        case 'COMPLETE_EXERCISE':
            return state.map(i=>exercise(i, action));
        default:
            return state;
    }
};

const exerciseReducer = combineReducers({
    exerciseList
});

export default exerciseReducer;