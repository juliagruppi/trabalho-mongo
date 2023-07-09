import { BadRequestError } from "routing-controllers"
import { PetsService } from "../pets/pets.service"
import { Service } from "typedi"

@Service()
export class GameService {
    constructor(private readonly petsService: PetsService) { }

    async giveFood(petId: string, food: string) {
        const pet = await this.petsService.findOneById(petId)
        if (!pet) throw new BadRequestError("Pet não encontrado")
        let hungry = pet.hungry

        if (hungry < 3) {
            switch (food) {
                case "healthyFood": {
                    hungry += 1
                    break;
                }
                case "fastFood": {
                    hungry += 2
                    break;
                }
                default: {
                    throw new BadRequestError("Comida não encontrada")
                }
            }

            pet.hungry = hungry
        }

        const newPet = await this.petsService.update(pet)
        return newPet
    }

    async giveMedicine(petId: string) {
        const pet = await this.petsService.findOneById(petId)
        if (!pet) throw new BadRequestError("Pet não encontrado")
        pet.health = 3

        const newPet = await this.petsService.update(pet)
        return newPet
    }

    async play(petId: string) {
        const pet = await this.petsService.findOneById(petId)
        if (!pet) throw new BadRequestError("Pet não encontrado")
        if (pet.happiness < 3) pet.happiness += 1

        const newPet = await this.petsService.update(pet)
        return newPet
    }
    async playWhithFriends(petId: string) {
        const pet = await this.petsService.findOneById(petId)
        if (!pet) throw new BadRequestError("Pet não encontrado")
        pet.happiness = 3

        const newPet = await this.petsService.update(pet)
        return newPet
    }
}