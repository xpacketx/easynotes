import React, {useReducer} from "react"
import {FirebaseContext} from "./firebaseContext"
import {firebaseReducer} from "./firebaseReducer"
import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADING} from "../types"
import axios from 'axios'

export const FirebaseState = ({children}) => {

  const url = process.env.REACT_APP_DB_URL

  const initialState = {
    notes: [],
    loading: false
  }

  const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoading = () => dispatch({
      type: SHOW_LOADING
    })

    const fetchNotes = async () => {
      showLoading()
      const res = await axios.get(`${url}/notes.json`)       

      const payload = Object.keys(res.data).map(key => {    
        return {                                             
          ...res.data[key],
          id: key
        }
      })
      dispatch({
        type: FETCH_NOTES,
        payload
      })
    }


    const addNote = async (title) => {
      const note = {
        title,
        data: new Date().toJSON()
      }

      try {
        const res = await axios.post(`${url}/notes.json`, note)  
        console.log('addNote', res.data)                             

        const payload = {
          ...note,
          id: res.data.name
        }

        dispatch({
          type: ADD_NOTE,
          payload
        })

      } catch(e) {
          throw new Error(e.message)
      }
    }

    const removeNote = async id => {
      await axios.delete(`${url}/notes/${id}.json`)
      dispatch({                                          
        type: REMOVE_NOTE,                                 
        payload: {id}
      })
    }

    return(
      <FirebaseContext.Provider value={{
        showLoading, fetchNotes, addNote, removeNote,
        loading: state.loading,
        notes: state.notes
      }}>
            {children}
      </FirebaseContext.Provider>
    )
}