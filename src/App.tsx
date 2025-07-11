import { useState } from "react"
import { ModularNav, NavLink } from "./components/navbar"
import { Create } from "./components/create"
import { useBoardStore } from "./stores/BoardStore"
import { CreatePenal } from "./components/CreateModal"

function App() {
  const [activeNav, setActiveNav] = useState<string | null>("Boards")
  const [name, setName] = useState<string | null>("")
  const [createModal, setCreateModal] = useState(false)
  const {boards, addBoard} = useBoardStore()

  // const handleCreate = () => {
  //   if(!name?.trim()) return
  //   addBoard(name)
  //   setName("")
  // }

  const handleCreateModal = () => {
    setCreateModal(true)
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex items-center justify-between w-[70%]">
        <ModularNav>
          <NavLink
            className={`${
              activeNav === "Boards"
                ? "text-white bg-[#FFAC4D] shadow-[0px_4px_15px_-3px_#FFAC4D]"
                : "text-black"
            }`}
            onClick={() => {
              setActiveNav("Boards");
            }}
          >
            Boards
          </NavLink>
          <NavLink
            className={`${
              activeNav === "All"
                ? "text-white bg-[#FFAC4D] shadow-[0px_4px_15px_-3px_#FFAC40]"
                : "text-black"
            }`}
            onClick={() => {
              setActiveNav("All");
            }}
          >
            All
          </NavLink>
        </ModularNav>
        <Create>
          <button
            onClick={handleCreateModal}
            className={`flex items-center justify-center p-3 w-full h-full rounded-full cursor-pointer bg-[#FFAC4D] shadow-[0px_4px_15px_-4px_#FFAC4D] text-white transition ease-linear`}
          >
            Create
          </button>
        </Create>
      </div>
      <CreatePenal>
        
      </CreatePenal>
    </div>
  );
}

export default App