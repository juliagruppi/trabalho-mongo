import { Service } from "typedi"
import { CreatePetDto } from "./dtos/createPet.dto"
import { Pet } from "./pets.model"
import { IPet } from "./pets.schema"
import { v4 as uuid } from "uuid"

@Service()
export class PetsRepository {
    constructor() { }

    async findOneById(petId: string) {
        const pet = await Pet.findOne({ id: petId }).lean()
        return pet
    }

    async findAll() {
        const pets = await Pet.find().lean()
        return pets
    }

    async create(createPetDto: CreatePetDto) {
        const newPet: IPet = {
            happiness: 3,
            health: 3,
            hungry: 3,
            id: uuid(),
            name: '',
            color: "gray"
        }
        Object.assign(newPet, createPetDto)
        const pet = (await Pet.create(newPet)).toJSON()
        return pet
    }

    async update(pet: IPet) {
        const updatePet = await Pet.findOneAndUpdate({ id: pet.id }, pet, {new: true}).lean()
        return updatePet
    }
    async delete(petId: string) {
        const deletePet = await Pet.findOneAndDelete({ id:petId  }, {new: true}).lean()
        return deletePet
    }

}