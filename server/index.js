const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const URL = process.env.HOSTCONNECTION + "stages";
const HttpErreur = require("./models/HttpErreur");
const StageRoute = require("./routes/StageRoute");
const EtudiantRoute = require("./routes/EtudiantRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/stage", StageRoute);
app.use("/api/etudiant", EtudiantRoute);
app.use((requete, reponse, next) => {
  return next(new HttpErreur("Route non trouvée", 404));
});

app.use((error, requete, reponse, next) => {
  if (reponse.headerSent) {
    return next(error);
  }
  reponse.status(error.code || 500);
  reponse.json({
    message: error.message || "Une erreur inconnue est survenue",
  });
});
mongoose.set("strictQuery", true);

mongoose
  .connect(URL)
  .then(() => {
    app.listen(5000);
    console.log("Connexion à la base de données réussie");
  })
  .catch((erreur) => {
    console.log(erreur);
  });

app.listen(PORT, () => {
  console.log("Server running");
});
