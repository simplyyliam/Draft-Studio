import { create } from "zustand";
import { type Board, CreateBoard } from "../libs/createBoard";


type BoardStore = {
    boards: Board[]
    addBoard: (name: string) => void
}

export const useBoardStore = create<BoardStore>((set) => ({
    boards: [],
    addBoard: (name) => set((state) => ({
        boards: [...state.boards, CreateBoard(name)]
    }))
}))