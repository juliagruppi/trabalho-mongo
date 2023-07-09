import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();
import { Container } from "typedi";
import { createExpressServer, useContainer } from "routing-controllers";
import { UserController } from "./user/user.controller";
import { PetsController } from "./pets/pets.controller";
import { connect } from "mongoose";
import { GameController } from "./game/game.controller";
import { TimeController } from "./time/time.controller";

useContainer(Container)

const port = process.env.PORT;
const host = process.env.HOST;

createExpressServer({
  controllers: [UserController, PetsController, GameController, TimeController],
  cors: true,
}).listen(port, host, async () => {
  await connect(process.env.DATABASE_URL ?? "");
  console.log(`Servidor express iniciado em http://${host}:${port}`);
});