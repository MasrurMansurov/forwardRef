import * as React from 'react'
import Form from './components/Form'
import Dialog from './components/Dialog'
import './App.css'

function App() {
  const [name, setName] = React.useState('') 
  const inputRef = React.useRef<HTMLInputElement>(null)
  const dialogRef = React.useRef<HTMLDialogElement>(null)

  function closeModal(){
    if(!dialogRef.current) return
    dialogRef.current.close()
    setName('')
  }

  React.useEffect(() => {
    inputRef.current?.focus()
  },[])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()

    if( !dialogRef.current) return
    dialogRef.current.showModal()
  }

  return (
    <main>
      <Form 
      handleSubmit={handleSubmit} 
      name={name} 
      setName={setName} 
      ref={inputRef} 
      />
      <Dialog closeModal={closeModal} ref={dialogRef}>
        <p>Your name is {name}</p>
      </Dialog>
    </main>
  )
}

export default App
