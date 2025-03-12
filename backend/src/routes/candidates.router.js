import { Router } from "express";

import { getCandidates, createCandidates, deleteCandidates } from "../controllers/candidates.controller.js";
import { isAuthorized } from "../middleware/auth.middleware.js";
import { isCandidateValid } from "../middleware/candidates.middleware.js";

const router = Router();

router.get("/",isAuthorized, getCandidates);
router.post("/add",isAuthorized,isCandidateValid, createCandidates);
router.delete("/:id",isAuthorized, deleteCandidates);

export default router;