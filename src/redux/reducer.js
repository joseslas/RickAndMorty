export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

const initialState = {
  myFavorites: []
};

const reducer = (state = initialState, {type, payload}) => {
  switch(type){
    case ADD_FAV:
      return {
        ...state, myFavorites: [...state.myFavorites, payload]
      }

    case REMOVE_FAV:
      return {
        ...state, myFavorites: state.myFavorites.filter((character) => character.id !== payload)
      }

    default:
      return {
        ...state
      }
  }
}

export default reducer;

