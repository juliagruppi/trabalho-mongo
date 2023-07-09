import { BadRequestError } from "routing-controllers";
import { PetsService } from "../pets/pets.service";
import { Service } from "typedi"

@Service()
export class TimeService {
    constructor(private readonly petsService: PetsService) {}

    async updatePetHungryStatus(petId: string) {
        const pet = await this.petsService.findOneById(petId)
        if (!pet) throw new BadRequestError("Pet não encontrado")

        pet.hungry = pet.hungry - 1 < 0 ? 0 : pet.hungry - 1

        const updatePet = await this.petsService.update(pet)
        return updatePet
    }
    async updatePetHappinessStatus(petId: string) {
        const pet = await this.petsService.findOneById(petId)
        if (!pet) throw new BadRequestError("Pet não encontrado")

        pet.happiness = pet.happiness - 1 < 0 ? 0 : pet.happiness - 1
        const updatePet = await this.petsService.update(pet)
        return updatePet
    }
    async updatePetHealthStatus(petId: string) {
        const pet = await this.petsService.findOneById(petId)
        if (!pet) throw new BadRequestError("Pet não encontrado")

        pet.health = pet.health - 1 < 0 ? 0 : pet.health - 1
        const updatePet = await this.petsService.update(pet)
        return updatePet
    }


}