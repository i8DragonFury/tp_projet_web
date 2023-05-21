const fs = require("fs");
const Etudiant = require("../models/Etudiant"); 
const HttpErreur = require("../models/HttpErreur");


const getEtudiant = async (req, res, next) => {
  try {
    const etudiant = await Etudiant.find();
    res.status(200).json(etudiant);
  } catch (err) {
    console.error("Erreur recupérer étudiant", err);
    res.status(500).send("Erreur recupérer étudiant");
  }
};

const ajouterEtudiant = async (req, res, next) => {
  try {
    const { numeroDA, nomEtudiant, courriel, profilType } = req.body;
    const etudiant = new Etudiant({
      numeroDA,
      nomEtudiant,
      courriel,
      profilType,
    });
    await etudiant.save();
    res.status(200).send(`Etudiant ${etudiant.nomEtudiant} ajouter correctment`);
  } catch (err) {
    console.error("Erreur ajouter étudiant", err);
    res.status(500).send("Erreur ajouter étudiant");
  }
};

const supprimer_etudiant = async (req, res, next) => {
  try {
    const userId = req.body.userId;
    await Etudiant.findByIdAndDelete(userId);
    res.status(200).send(`Étudiant supprimé correctement`);
  } catch (err) {
    console.error("Erreur supprimant étudiant", err);
    res.status(err.code || 500).send(err.message || "Erreur supprimant étudiant");
  }
};

const supprimeretudiants = async (req, res, next) => {
  try {
    await Student.deleteMany();
    res.status(200).send("Tous les étudiants ont été supprimés");
  } catch (err) {
    console.error("Erreur en supprimant les étudiants", err);
    res.status(500).send("Erreur en supprimant les étudiants");
  }
};

//exports.processCsv = processCsv;
exports.getEtudiant = getEtudiant;
exports.ajouterEtudiant = ajouterEtudiant;
exports.supprimer_etudiant = supprimer_etudiant;
exports.supprimeretudiants = supprimeretudiants;
