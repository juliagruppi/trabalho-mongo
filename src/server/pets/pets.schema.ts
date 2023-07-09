import { Schema } from "mongoose"

export interface IPet {
    id: string,
    name: string,
    color: "gray" | "white",
    hungry: number,
    health: number,
    happiness: number
}

export const petSchema = new Schema<IPet>({
    id: {
        type: Schema.Types.String
    },
    name: {
        type: Schema.Types.String,
        minlength: 2,
        maxlength: 16
    },
    color: {
        type: Schema.Types.String,
    },
    happiness: {
        type: Schema.Types.Number,
        min: 0,
        max: 3
    },
    health: {
        type: Schema.Types.Number,
        min: 0,
        max: 3
    },
    hungry: {
        type: Schema.Types.Number,
        min: 0,
        max: 3
    }
})