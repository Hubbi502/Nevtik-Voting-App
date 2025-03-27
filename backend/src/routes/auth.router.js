import { Router } from "express";
import { login, register, getUsers, getSpecificUser, logoutUser } from "../controllers/user.controller.js";
import { isLoginValid, isRegisterValid, isAuthorized, isDataValid} from "../middleware/auth.middleware.js";
import { readCSV, uploadCSV } from "../controllers/file.controller.js";
import { upload } from "../utils/multer.js";
import prisma from "../utils/prisma.js";


const router = Router();
router.get("/users", isAuthorized, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 25;
    const skip = (page - 1) * limit;

    const users = await prisma.user.findMany({
      skip,
      take: limit,
    });

    const total = await prisma.user.count();
    const totalPages = Math.ceil(total / limit);

    res.json({
      message: "success",
      data: users,
      total,
      currentPage: page,
      totalPages
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: "Error fetching users" });
  }
});
router.get("/users/:email",isAuthorized, getSpecificUser);
router.post("/login",isLoginValid, login);
router.post("/register",isRegisterValid,isAuthorized , register);
router.post("/upload/csv", isAuthorized, upload.single('csv'), uploadCSV);
router.post("/register/csv/:filename", isAuthorized,isDataValid, readCSV)
router.post("/logout", logoutUser)

export default router;