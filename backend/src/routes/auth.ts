import { Router } from "express";

const router: Router = Router();

import { TokenValidation } from '../libs/verifyToken'
import { signIn , signUp , profile} from '../controllers/auth.controller'

router.post("/signin", signIn)
router.post("/signup", signUp)
router.get("/profile", TokenValidation , profile)


export default router;