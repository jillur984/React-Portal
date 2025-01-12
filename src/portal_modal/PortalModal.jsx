import { useState } from "react"
import ModalContent from "../modal/ModalContent"
import Portal from "../Portal"


const PortalModal = () => {
    const[showModal,setShowModal]=useState(false)
  return (
    <div className="relative border border-black mb-5 p-2 w-64 h-20 overflow-hidden">
    <button className="bg-black text-white border rounded-md" onClick={()=>setShowModal(true)} >
      Modal Using React Portal
    </button >
    <Portal>
    {showModal &&<ModalContent onClose={()=>setShowModal(false)}/>}
    </Portal>
    </div>
  )
}

export default PortalModal