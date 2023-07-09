import { JsonController, Param, Post } from "routing-controllers";
import { TimeService } from "./time.service";
import { Service } from "typedi"
@Service()
@JsonController('/time')
export class TimeController {
    constructor(private readonly timeService: TimeService) {}

    @Post('/hungry/:petId')
    async updateHungry(@Param("petId") petId: string) {
        const pet = await this.timeService.updatePetHungryStatus(petId)
        return pet
    }
    @Post('/happiness/:petId')
    async updateHappiness(@Param("petId") petId: string) {
        const pet = await this.timeService.updatePetHappinessStatus(petId)
        return pet
    }
    @Post('/health/:petId')
    async updateHealth(@Param("petId") petId: string) {
        const pet = await this.timeService.updatePetHealthStatus(petId)
        return pet
    }
}