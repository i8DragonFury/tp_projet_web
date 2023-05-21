const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const etudiantSchema = new Schema({
  numeroDA: { type: String, required: true, unique: true },
  nomEtudiant: { type: String, required: true },
  courriel: { type: String, required: true },
  profilType: { type: String, required: true },
});

module.exports = mongoose.model("Etudiant", etudiantSchema);
