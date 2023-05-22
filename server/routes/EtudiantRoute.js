const express = require("express");
const router = express.Router();
const etudiantController = require("../controllers/EtudiantController");



router.get("/etudiant",etudiantController.getEtudiant);
router.post("/ajouter-etudiant",etudiantController.ajouterEtudiant);
router.post("/supprimer-etudiants",etudiantController.supprimeretudiants);
router.delete("/supprimer-etudiant",etudiantController.supprimer_etudiant);


module.exports = router;
