import { Router } from "express";

import {
  listAffiliates,
  showCreateForm,
  createAffiliate,
  showAffiliate,
  showEditForm,
  updateAffiliate,
  deleteAffiliate
} from "../controllers/affiliateController";

const router = Router();

router.get("/", listAffiliates);

router.get("/create", showCreateForm);
/* Edición de afiliados */
router.get("/edit/:id", showEditForm);
router.post("/edit/:id", updateAffiliate);
/*Eliminar Afiliado*/
router.post("/delete/:id", deleteAffiliate);
/* Ruta para afiliado por id*/
router.get("/:id", showAffiliate);

router.post("/create", createAffiliate);

export default router;



