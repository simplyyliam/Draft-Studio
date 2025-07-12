import { useEffect, useRef, useState } from "react";
import { ModularNav, NavLink } from "./components/navbar";
import { Create } from "./components/create";
import { useBoardStore } from "./stores/BoardStore";
import { CreatePenal } from "./components/CreateModal";
import { CloseButton } from "./components/CloseButton";
import { X } from "lucide-react";
import gsap from "gsap";
import { Column } from "./components/Column";

function App() {
  const [activeNav, setActiveNav] = useState("Boards");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [createModal, setCreateModal] = useState(false);
  const { boards, addBoard } = useBoardStore();

  const panelRef = useRef<HTMLDivElement>(null);

  const handleCreate = () => {
    if (!name.trim()) return;
    addBoard(name);
    setName("");
    setDescription("");
    setCreateModal(false);
  };

  const handleCreateModal = () => setCreateModal(true);

  const handlePanelClose = () => setCreateModal(false);

  useEffect(() => {
    if (createModal) {
      gsap.to(panelRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "expo.out",
      });
    }
  }, [createModal]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-10">
      <div className="flex items-center justify-between w-[70vw]">
        <ModularNav>
          <NavLink
            className={`${
              activeNav === "Boards"
                ? "text-white bg-blue-500 shadow-[0px_4px_15px_-3px_#608ff550]"
                : "text-black"
            }`}
            onClick={() => setActiveNav("Boards")}
          >
            Boards
          </NavLink>
          <NavLink
            className={`${
              activeNav === "All"
                ? "text-white bg-blue-500 shadow-[0px_4px_15px_#608ff550]"
                : "text-black"
            }`}
            onClick={() => setActiveNav("All")}
          >
            All
          </NavLink>
        </ModularNav>
        <Create>
          <button
            onClick={handleCreateModal}
            className="flex items-center justify-center p-3 w-full h-full rounded-full cursor-pointer bg-blue-500 shadow-[0px_4px_15px_-4px_#608ff550] text-white transition ease-linear"
          >
            Create
          </button>
        </Create>
      </div>
      {createModal && (
        <div
          ref={panelRef}
          className="flex gap-4 opacity-0 scale-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
        >
          <CreatePenal>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold text-gray-900">
                Board Name
              </h1>
              <input
                className="bg-white/60 border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-400 transition"
                type="text"
                placeholder="Type here..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold text-gray-900">
                Board Description{" "}
                <span className="text-gray-400 text-sm">(Optional)</span>
              </h1>
              <textarea
                className="bg-white/60 border border-gray-300 p-3 rounded-lg w-full h-[8em] focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-400 transition resize-none"
                placeholder="Type here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button
              onClick={handleCreate}
              className="flex items-center justify-center p-3 w-full rounded-xl cursor-pointer bg-blue-500 shadow-md text-white font-semibold transition hover:bg-blue-600 hover:shadow-lg active:scale-95"
            >
              Create
            </button>
          </CreatePenal>
          <CloseButton onClick={handlePanelClose}>
            <X className="w-6 h-6 text-gray-500 hover:text-gray-700 transition" />
          </CloseButton>
        </div>
      )}
      <div className="max-w-[70vw] h-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6">
        {boards.map((board) => (
          <Column key={board.id}>{board.name}</Column>
        ))}
      </div>
    </div>
  );
}

export default App;
