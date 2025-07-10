import { useState } from "react"
import { ModularNav, NavLink } from "./components/navbar"

function App() {
  const [activeNav, setActiveNav] = useState<string | null>()
  
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex items-center justify-center w-full">
        <ModularNav>
          <NavLink className={`${activeNav === "Boards" ? "text-white bg-[#FFAC4D]" : "text-black"}`} onClick={() => {
            setActiveNav("Baords")
          }}>Boards</NavLink>
          <NavLink className={`${activeNav === "All" ? "text-white bg-[#FFAC4D]" : "text-black"}`} onClick={() => {
            setActiveNav("All")
          }}>All</NavLink>
        </ModularNav>
      </div>
    </div>
  )
}

export default App