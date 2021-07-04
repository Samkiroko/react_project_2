import React, { useState } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredUserAge, setEnteredUserAge] = useState('')
  const addUserHandler = (event) => {
    event.preventDefault()
    console.log(enteredUserAge, enteredUsername)
    // reset the form
    setEnteredUserAge('')
    setEnteredUsername('')
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredUserAge(event.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={enteredUserAge} onChange={usernameChangeHandler} />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' value={enteredUserAge} onChange={ageChangeHandler} />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
