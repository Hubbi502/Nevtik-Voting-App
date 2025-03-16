import { Router } from "express";
import { login, register, getUsers, getSpecificUser, logoutUser } from "../controllers/user.controller.js";
import { isLoginValid, isRegisterValid, isAuthorized, isDataValid} from "../middleware/auth.middleware.js";
import { readCSV } from "../controllers/user.controller.js";


const router = Router();
router.get("/users",isAuthorized, getUsers);
router.get("/users/:email",isAuthorized, getSpecificUser);
router.post("/login",isLoginValid, login);
router.post("/register",isRegisterValid,isAuthorized , register);
router.get("/register/csv/:filename", isAuthorized,isDataValid, readCSV)
router.post("/logout", logoutUser)

export default router;