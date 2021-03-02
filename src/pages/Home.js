import React, {useContext, useEffect} from "react"
import {Form} from "../components/Form"
import {Notes} from "../components/Notes"
import {FirebaseContext} from "../context/firebase/firebaseContext"
import {Spinner} from "../components/Spinner"

export const Home = () => {

  const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

  useEffect(() => {     
    fetchNotes()
  // eslint-disable-next-line
  }, [])

  return(
    <>
      <Form/>
      <hr/>
      {loading
       ? <Spinner/>
       : <Notes notes={notes} onRemove={removeNote}/>
      }
    </>
  )
}