
import PortalModal from "./portal_modal/PortalModal"
import TraditionalModal from "./traditional_modal/TraditionalModal"
import { createPortal } from "react-dom"

const App = () => {
  
  return (
    <>
    <TraditionalModal/>
    <PortalModal/>
    </>
  )
}

export default App