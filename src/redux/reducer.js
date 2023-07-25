export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, {type, payload}) => {
  switch(type){
    case ADD_FAV:
      return {
        ...state, myFavorites: [...state.allCharacters, payload], allCharacters: [...state.allCharacters, payload]
      }

    case REMOVE_FAV:
      return {
        ...state, myFavorites: state.myFavorites.filter((character) => character.id !== payload)
      }

    case FILTER:
      const all_character = state.allCharacters.filter(character => character.gender === payload);
      return {
        ...state, myFavorites: all_character
      }

    case ORDER:
      const orderAllCharacters = [...state.allCharacters];
      return {
        ...state,
        myFavorites: payload === "A" ? orderAllCharacters.sort((a, b) => a.id - b.id) : orderAllCharacters.sort((a, b) => b.id - a.id)
      }

    default:
      return {
        ...state
      }
  }
}

export default reducer;

