import { Router } from "express";

import {
  listAffiliates,
  showCreateForm,
  createAffiliate,
  showAffiliate
} from "../controllers/affiliateController";

const router = Router();

router.get("/", listAffiliates);

router.get("/create", showCreateForm);
/* Ruta para afiliado por id*/
router.get("/:id", showAffiliate);

router.post("/create", createAffiliate);

export default router;


