import * as React from 'react'
import '../App.css'

interface DialogProps {
    children: React.ReactNode
    closeModal: () => void; 
}

const Dialog = React.forwardRef<HTMLDialogElement, DialogProps>(({children, closeModal}, ref) => {
  return (
       <dialog className='dialog' ref={ref}>
        <h2>INFO</h2>
        {children}
        <button onClick={closeModal}>reset</button>
      </dialog>
  )
})

export default Dialog
