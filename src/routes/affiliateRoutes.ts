import { Router } from "express";
import { listAffiliates } from "../controllers/affiliateController";

const router = Router();

router.get("/", listAffiliates);

export default router;