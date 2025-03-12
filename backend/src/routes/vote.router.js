import { Router } from "express";
import { addVote } from "../controllers/vote.controller.js";
import { isVoteValid } from "../middleware/vote.middleware.js";
const router = Router();

router.post("/add",isVoteValid, addVote);

export default router;