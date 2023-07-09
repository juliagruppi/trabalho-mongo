import { Service } from "typedi";
import { PetsRepository } from "./pets.repository";
import { CreatePetDto } from "./dtos/createPet.dto";
import { IPet } from "./pets.schema";

@Service()
export class PetsService {
    constructor(private readonly petsRepository: PetsRepository) {}
    
    async findOneById(petId: string) {
        const pet = await this.petsRepository.findOneById(petId)
        return pet
    }

    async findAll() {
        const pet = await this.petsRepository.findAll()
        return pet
    }

    async create(createPetDto: CreatePetDto) {
        const pet = await this.petsRepository.create(createPetDto)
        return pet
    }
    
    async update(pet: IPet) {

        const updatePet = await this.petsRepository.update(pet)
        return updatePet
    }
    async delete(petId: string) {

        const deletePet = await this.petsRepository.delete(petId)
        return deletePet
    }

}