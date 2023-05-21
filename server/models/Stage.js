const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stageSchema = new Schema({
  nomcontact: { type: String, required: true },
  courrielcontact: { type: String, required: true },
  nomcompagnie: { type: String, required: true },
  adressecompagnie: { type: String, required: true },
  typestage: {
    type: String,
    enum: ["Réseaux et sécurité", "Développement d'applications"],
    required: true,
  },
  titrestage: { type: String, required: true },
  nbpositions: { type: Number, required: true },
  stagedescription: { type: String, required: true },
  salaire: { type: String, required: true },
  employeurid: { type: mongoose.Types.ObjectId, required: true, ref: "EmployeurId" },
  listetudiant: [{ type: mongoose.Types.ObjectId, ref: "EtudiantId" }],
});

module.exports = mongoose.model("Stage", stageSchema);
