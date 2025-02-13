import * as React from 'react'
import '../App.css'

interface FormProps {
    handleSubmit: React.FormEventHandler<HTMLFormElement>,
    name: string,
    setName: (name: string) => void
}

const Form = React.forwardRef<HTMLInputElement, FormProps>(({handleSubmit, name, setName}, ref) => {
  return (
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor='name'>Your Name</label>
      <input 
      type="text" 
      ref={ref}
      name='name'
      id='name'
      value={name}
      onInput={(e) => setName(e.currentTarget.value)}
      />
      <input type="submit" />
    </form>
  )
})

export default Form
