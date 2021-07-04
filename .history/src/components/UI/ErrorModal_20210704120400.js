import React from 'react'
import Button from './Button'
import Card from './Card'

const ErrorModal = (props) => {
  return (
    <Card>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <Button>Okey</Button>
      </footer>
    </Card>
  )
}

export default ErrorModal
