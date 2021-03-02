import {SHOW_LOADING, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE} from "../types"

const handlers = {
  [SHOW_LOADING]: state => ({
    ...state,
    loading: true
  }),

  [ADD_NOTE]: (state, {payload}) => ({
    ...state,
    notes: [...state.notes, payload]
  }),

  [FETCH_NOTES]: (state, {payload}) => ({
    ...state,
    notes: payload,
    loading: false
  }),

  [REMOVE_NOTE]: (state, {payload}) => (
    {
      ...state,
      notes: state.notes.filter(note => note.id !== payload.id)
    }
  ),

  DEFAULT: state => state
}


export const firebaseReducer = (state, action) => {

  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)

}