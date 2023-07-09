import {
  JsonController,
  Get,

} from "routing-controllers";
import { connect, Schema, model } from "mongoose";

interface IUser {
  name: string;
  surname: string;
  email: string;
}

const userSchema = new Schema<IUser>({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  surname: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
});

const User = model<IUser>("User", userSchema);

@JsonController("/users")
export class UserController {
  @Get()
  async getAll() {
    await connect(process.env.DATABASE_URL ?? "");
  /*   await User.insertMany([
      { name: "Felipe", surname: "Seabra", email: "felipe@teste.com" },
      { name: "Gustavo", surname: "Sena", email: "gustavo@teste.com" },
      { name: "Julia", surname: "Basilio", email: "julia@teste.com" },
      { name: "Tiago", surname: "Marchione", email: "tiago@teste.com" },
    ]); */
    const users = await User.find().lean();

    return users;
  }
}