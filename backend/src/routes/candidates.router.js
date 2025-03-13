import { Router } from "express";
import { getCandidates, createCandidates, deleteCandidates, getVotes, getVotePercentage,getWinner } from "../controllers/candidates.controller.js";
import { listFiles, serveImage } from "../controllers/file.controller.js";
import { isAuthorized } from "../middleware/auth.middleware.js";
import { isCandidateValid } from "../middleware/candidates.middleware.js";
import path from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const router = Router();

router.get("/", getCandidates);
router.post("/add",isAuthorized,isCandidateValid, createCandidates);
router.delete("/:id",isAuthorized, deleteCandidates);
router.get("/votes",isAuthorized, getVotes);
router.get("/votes/persen",isAuthorized, getVotePercentage)
router.get("/votes/winner",isAuthorized, getWinner)
router.get("/img/:filename",serveImage);
router.get("/img/list",listFiles);

export default router;