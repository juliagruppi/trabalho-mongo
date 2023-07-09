import { IsString, Matches } from "class-validator"

export class GiveFoodDto {
    @IsString()
    petId: string

    @IsString()
    @Matches(/^healthyFood|fastFood$/)
    food: "healthyFood" | "fastFood"
}