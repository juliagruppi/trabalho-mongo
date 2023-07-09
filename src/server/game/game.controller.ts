import { Body, JsonController, Param, Post } from "routing-controllers";
import { GameService } from "./game.service";
import { Service } from "typedi"
import { GiveFoodDto } from "./dtos/giveFood.dto";

@Service()
@JsonController('/game')
export class GameController {
    constructor(private readonly gameService: GameService) { }

    @Post('/food')
    async giveFood(@Body() giveFoodDto: GiveFoodDto) {
        const pet = await this.gameService.giveFood(giveFoodDto.petId, giveFoodDto.food)
        return pet
    }

    @Post('/medicine/:petId')
    async giveMedicine(@Param("petId") petId: string) {
        const pet = await this.gameService.giveMedicine(petId)
        return pet

    }

    @Post('/play/:petId')
    async play(@Param("petId") petId: string) {
        const pet = await this.gameService.play(petId)
        return pet

    }
    @Post("/play/friends/:petId")
    async playWhithFriends(@Param("petId") petId: string) {
        const pet = await this.gameService.playWhithFriends(petId)
        return pet

    }
}