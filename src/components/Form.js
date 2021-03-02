import React, {useState, useContext} from "react"
import {AlertContext} from "../context/alert/alertContext"
import {FirebaseContext} from "../context/firebase/firebaseContext"

export const Form = () => {

  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const firebase = useContext(FirebaseContext)

  const submitHandler = e => {
    e.preventDefault()

    if(value.trim()) {
      firebase.addNote(value.trim())
        .then(() => {
          alert.show('A new note was created!', 'success')
        }).catch(() => {
            alert.show('Something went wrong!', 'danger')
          })
      setValue('')
    } else {
      alert.show('Write a note')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          onChange={e => setValue(e.target.value)} 
          value={value}                             
          type="text"
          className="form-control"
          placeholder="Write a new note"
        />
      </div>
    </form>
  )
}