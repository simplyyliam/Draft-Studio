import { useState } from "react"
import { ModularNav, NavLink } from "./components/navbar"

function App() {
  const [activeNav, setActiveNav] = useState<string | null>()
  
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex items-center justify-center w-full">
        <ModularNav>
          <NavLink className={`${activeNav === "Boards" ? "text-white bg-[#FFAC4D] shadow-[0px_4px_15px_-3px_#FFAC40]" : "text-black"}`} onClick={() => {
            setActiveNav("Boards")
          }}>Boards</NavLink>
          <NavLink className={`${activeNav === "All" ? "text-white bg-[#FFAC4D] shadow-[0px_4px_15px_-3px_#FFAC40]" : "text-black"}`} onClick={() => {
            setActiveNav("All")
          }}>All</NavLink>
        </ModularNav>
      </div>
    </div>
  )
}

export default App