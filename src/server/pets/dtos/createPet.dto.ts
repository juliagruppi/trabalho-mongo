import { IsString, Matches, MaxLength, MinLength } from "class-validator"

export class CreatePetDto {
    
    @IsString()
    @MinLength(2)
    @MaxLength(16)
    name: string

    @IsString()
    @Matches(/^gray|white$/)
    color: "gray" | "white"
}
