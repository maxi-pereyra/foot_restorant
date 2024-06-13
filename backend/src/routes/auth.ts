import express from "express";
import { validateCreate } from "../validators/usersValidator";

const router = express.Router();

import { TokenValidation } from '../middleware/verifyToken'
import { signIn , signUp , profile} from '../controllers/auth.controller'

router.post("/signin", signIn)
router.post("/signup", validateCreate, signUp)
router.get("/profile", TokenValidation , profile)


module.exports = router;