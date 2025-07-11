import { useState } from "react";
import { ModularNav, NavLink } from "./components/navbar";
import { Create } from "./components/create";
import { useBoardStore } from "./stores/BoardStore";
import { CreatePenal } from "./components/CreateModal";
import { CloseButton } from "./components/CloseButton";
import { PanelRightCloseIcon, X } from "lucide-react";

function App() {
  const [activeNav, setActiveNav] = useState<string | null>("Boards");
  const [name, setName] = useState<string | null>("");
  const [description, setDescription] = useState<string | null>("");
  const [createModal, setCreateModal] = useState(false);
  const { boards, addBoard } = useBoardStore();

  const handleCreate = () => {
    if(!name?.trim()) return
    addBoard(name)
    setName("")
    setDescription("")
  }

  const handleCreateModal = () => {
    setCreateModal(true);
  };

  const handlePanelClose = () => {
    if (!createModal) return;
    if (createModal) {
      setCreateModal(false);
    }
  };

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
      {createModal && (
        <div className="flex gap-4">
          <CreatePenal>
            <div className="flex flex-col gap-2">
              <h1>Board Name</h1>
              <input
                className="bg-[#959595] p-2.5 rounded-md w-full focus:outline-none text-white shadow-lg"
                type="text"
                placeholder="Type here..."
                value={name ?? ""}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Board Description (Optional)</h1>
              <textarea
                className="bg-[#959595] p-2.5 rounded-md w-full h-[11em] focus:outline-none text-white shadow-lg"
                placeholder="Type here..."
                value={description ?? ""}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button
              onClick={handleCreate}
              className={`flex items-center justify-center p-3 w-full h-full rounded-full cursor-pointer bg-[#FFAC4D] shadow-[0px_4px_15px_-4px_#FFAC4D] text-white transition ease-linear duration-200 hover:bg-[#ff9900] hover:shadow-[0px_8px_24px_-4px_#FFAC4D] hover:scale-105`}
            >
              Create
            </button>
          </CreatePenal>
          <CloseButton onClick={handlePanelClose}>
            <X />
          </CloseButton>
        </div>
      )}
    </div>
  );
}

export default App;
