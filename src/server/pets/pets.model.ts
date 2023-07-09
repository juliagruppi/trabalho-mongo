import { Model, model } from "mongoose";
import { petSchema, IPet } from "./pets.schema";

export const Pet = model<IPet>("Pet", petSchema)