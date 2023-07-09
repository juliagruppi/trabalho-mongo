import { create } from "zustand";
import { CreatePetDto } from "../../server/pets/dtos/createPet.dto";
import { IPet } from "../../server/pets/pets.schema";

export type GlobalStore = {
    createPet: CreatePetDto,
    setCreatePet: (arg: Partial<CreatePetDto>) => void
    pet: IPet,
    setPet: (arg: IPet) => void
};

export const initialPet: IPet = {
    id: '',
    name: '',
    color: "gray",
    hungry: 0,
    health: 0,
    happiness: 0
};

export const useGlobalStore = create<GlobalStore>((set, get) => ({
    createPet: {
        name: '',
        color: 'gray'
    },
    setCreatePet(createPet) {
        set( {createPet} );
    },
    pet: initialPet,
    setPet(newPet: IPet) {
        set({ pet: { ...get().pet, ...newPet } });
    },
}));