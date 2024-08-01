

const ModalContent = ({onClose}) => {
  return (
   <div className=
   'flex justify-evenly items-center border rounded-lg absolute top-20 left-20 bottom-2 bg-black text-white p-2 ' role="dialog" aria-modal="true">
   <p className='mx-2'>hey i am a Modal</p>
   <button className="bg-white text-black border rounded-md" onClick={onClose}>Close</button>
   </div>
  )
}

export default ModalContent