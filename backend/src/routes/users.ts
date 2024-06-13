import express from "express";
const router = express.Router();
import { TokenValidation } from "../middleware/verifyToken";
import { checkRoleAuth } from "../middleware/authRole";


router.get('/admin',TokenValidation,checkRoleAuth(['admin']))

router.get('/user',TokenValidation,checkRoleAuth(['user'])) //deve traer los productos comprados

router.put('/user',TokenValidation,checkRoleAuth(['user']))

router.delete('/user',TokenValidation,checkRoleAuth(['user']))

module.exports = router


