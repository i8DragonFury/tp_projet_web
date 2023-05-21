const express = require("express");
const router = express.Router();
const etudiantController = require("../controllers/EtudiantController");
const verifyToken = require("../utils/VerifyToken");


router.get("/etudiant", verifyToken, etudiantController.getEtudiant);
router.post("/ajouter-etudiant", verifyToken, etudiantController.ajouterEtudiant);
router.post("/supprimer-etudiants",verifyToken,etudiantController.supprimeretudiants);
router.delete("/supprimer-etudiant", verifyToken, etudiantController.supprimer_etudiant);


module.exports = router;
