import { Router } from "express";

import { handlerCreateUser, handlerGetUser, handlerUpdateUser } from "../handlers/handlerUser";

const routes = Router();

routes.post("/create-user", handlerCreateUser);
routes.get("/:userId", handlerGetUser);
routes.put("/user-modify", handlerUpdateUser);


export default routes;