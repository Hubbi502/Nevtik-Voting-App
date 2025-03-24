import { Router } from "express";
import { login, register, getUsers, getSpecificUser, logoutUser } from "../controllers/user.controller.js";
import { isLoginValid, isRegisterValid, isAuthorized, isDataValid} from "../middleware/auth.middleware.js";
import { readCSV, uploadCSV } from "../controllers/file.controller.js";
import { upload } from "../utils/multer.js";


const router = Router();
router.get("/users",isAuthorized, getUsers);
router.get("/users/:email",isAuthorized, getSpecificUser);
router.post("/login",isLoginValid, login);
router.post("/register",isRegisterValid,isAuthorized , register);
router.post("/upload/csv", isAuthorized, upload.single('csv'), uploadCSV);
router.post("/register/csv/:filename", isAuthorized,isDataValid, readCSV)
router.post("/logout", logoutUser)

export default router;