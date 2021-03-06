import React from 'react'
import Card from '../UI/Card'

const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.user.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UserList
