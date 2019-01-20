import {
   GET_TEAM_DETAILS ,
   GET_ALL_TEAM_PLAYERS,
   ADD_PLAYER,
   EDIT_PLAYER,
  REMOVE_PLAYER 
} from '../constants';


const initialState = { 
  teamDetails: [],
  teamPlayersList: []
}


function teamsReducer(state = initialState, action) {
  let nextState
  
  switch (action.type) {
    case ADD_PLAYER:

     nextState = {
      ...state,
      teamPlayersList: [...state.teamPlayersList, action.value]
    }
    return nextState || state
    case REMOVE_PLAYER:
      const teamPlayerIndex = state.teamPlayersList.findIndex(item => item.id === action.value.id)
      if (teamPlayerIndex !== -1) {
        // Le player est déjà dans la liste, on le supprime 
        nextState = {
          ...state,
          teamPlayersList: state.teamPlayersList.filter( (item, index) => index !== teamPlayerIndex)
        }
      }
      else {
        // Le player n'est pas dans la liste, on l'ajoute 
        nextState = {
          ...state,
          teamPlayerList: [...state.teamPlayersList, action.value]
        }
      }
      return nextState || state
 
    default:
      return state
  }
}

export default teamsReducer
