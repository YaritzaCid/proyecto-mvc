import { Router } from "express";

import {
  listAffiliates,
  showCreateForm,
  createAffiliate
} from "../controllers/affiliateController";

const router = Router();

router.get("/", listAffiliates);

router.get("/create", showCreateForm);

router.post("/create", createAffiliate);

export default router;