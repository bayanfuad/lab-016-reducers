export const actionType = {
    ADD_Developer: 'ADD_Developer',
    DELETE_Developer: 'DELETE_Developer'
};

export const developer = ( state, action ) => {
    switch ( action.type ) {
        case actionType.ADD_Developer:
            return [ ...state, {
                name: action.payload.name,
                favProgLanguages: action.payload.favProgLanguages,
                favTech: action.payload.favTech,
                favFood: action.payload.favFood,
                favDrink: action.payload.favDrink,
                id: Math.floor(100+(Math.random() * 100)) 
            } ];
        case actionType.DELETE_Developer:
            return state.filter( ( developer ) => developer.id !== action.payload );
        default:
            return state;
    }
};