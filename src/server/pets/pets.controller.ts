import { Service } from "typedi";
import { CreatePetDto } from "./dtos/createPet.dto";
import { PetsService } from "./pets.service";
import { Body, Delete, Get, JsonController, Param, Post } from "routing-controllers";

@Service()
@JsonController('/pets')
export class PetsController {
    constructor(private readonly petsService: PetsService) { }

    @Get()
    async findAll() {
        const pet = await this.petsService.findAll()
        return pet
    }

    @Get("/:petId")
    async findOneById(@Param("petId") petId: string) {
        const pet = await this.petsService.findOneById(petId)
        return pet
    }

    @Post()
    async create(@Body() createPetDto: CreatePetDto) {
        const pet = await this.petsService.create(createPetDto)
        return pet
    }
    @Delete("/:petId")
    async delete(@Param("petId") petId: string) {
        const pet = await this.petsService.delete(petId)
        return pet
    }

}