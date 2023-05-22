const express = require("express");
const StageController = require("../controllers/StageController");
const router = express.Router();


router.post("/ajouter-stage", StageController.ajouterStage);
router.get("/stagesComplet", StageController.stagesComplet);
router.get("/getStagesByEmployeurId", StageController.getStagesByEmployeurId);
router.delete("/supprimerStage", StageController.supprimerStage);
router.post("/update-stage", StageController.updateStage);

module.exports = router;
