import { nanoid } from "nanoid";

export type Card = {
    id: string;
    content: string;
};

export type Board = {
    id: string,
    name: string,
    createdBy: Date,
    cards: Card[]
}

export function CreateBoard (name: string): Board {
    return {
        id: nanoid(),
        name,
        createdBy: new Date(),
        cards: [],
    }
}