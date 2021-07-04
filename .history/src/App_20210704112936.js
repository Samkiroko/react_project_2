import React from 'react'

import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {
  return (
    <div>
      <AddUser />
      <UserList user={[]} />
    </div>
  )
}

export default App
