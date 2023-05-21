const Stage = require("../models/Stage");
const HttpError = require("../models/HttpErreur");

const ajouterStage = async (req, res) => {
  try {
    const newStage = new Stage({
      nomcontact: req.body.nomcontact,
      courrielcontact: req.body.courrielcontact,
      nomcompagnie: req.body.nomcompagnie,
      adressecompagnie: req.body.adressecompagnie,
      typestage: req.body.typestage,
      titrestage: req.body.titrestage,
      nbpositions: req.body.nbpositions,
      stagedescription: req.body.stagedescription,
      salaire: req.body.salaire,
      employeurid: req.body.employeurid,
      listetudiant: [],
    });

    const stage = await newStage.save();

    res
      .status(201)
      .json({ message: "Stage ajouter avec succès", stage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "ERREUR INTERNE SERVEUR" });
  }
};

const stagesComplet = async (requete, reponse, next) => {
  let stages;
  try {
    stages = await Stage.find();
  } catch (err) {
    return next(
      new HttpErreur(
        "Erreur, imposssible de récupérer la liste des profs",
        500
      )
    );
  }
  if (!stages) {
    return next(new HttpErreur("Aucun professeur trouvé", 404));
  }
  reponse.json({
    stages: stages.map((stage) => stage.toObject({ getters: true })),
  });
};

const getStagesByEmployeurId = async (req, res, next) => {
  const employeurid = req.query.employeurid;
  let stages;
  try {
    stages = await Stage.find({ employeurid: employeurid });
  } catch (err) {
    return next(
      new HttpError(
        "Erreur, impossible de récupérer la liste des stages",
        500
      )
    );
  }

  if (!stages || stages.length === 0) {
    return next(new HttpError("Aucun stage trouvé", 404));
  }
  res.json({
    stages: stages.map((stage) => stage.toObject({ getters: true })),
  });
};

const supprimerStage = async (req, res, next) => {
  const stageId = req.body.stageId;
  let stage;
  try {
    stage = await stage.findByIdAndRemove(stageId);
  } catch (err) {
    return next(new HttpError("Erreur lors de la suppression du stage", 500));
  }

  if (!stage) {
    return next(new HttpError("Aucun stage trouvé avec cet id", 404));
  }
  res.status(200).json({ message: "Stage supprimé avec succès" });
};

const updateStage = async (req, res, next) => {
  const stageId = req.query.stageId;

  const {
    nomcontact,
    courrielcontact,
    nomcompagnie,
    adressecompagnie,
    typestage,
    titrestage,
    nbpositions,
    stagedescription,
    salaire,
  } = req.body;

  let stage;
  try {
    stage = await stage.findById(stageId);
  } catch (err) {
    return next(new HttpError("Erreur lors de la recherche du stage", 500));
  }

  if (!stage) {
    return next(new HttpError("Aucun stage trouvé avec cet id", 404));
  }

  stage.nomcontact = nomcontact || stage.nomcontact;
  stage.courrielcontact = courrielcontact || stage.courrielcontact;
  stage.adressecompagnie = adressecompagnie || stage.adressecompagnie;
  stage.nomcompagnie = nomcompagnie || stage.nomcompagnie;
  stage.typestage = typestage || stage.typestage;
  stage.titrestage = titrestage || stage.titrestage;
  stage.nbpositions = nbpositions || stage.nbpositions;
  stage.stagedescription =
    stagedescription || stage.stagedescription;
  stage.salaire = salaire || stage.salaire;

  try {
    await stage.save();
  } catch (err) {
    return next(new HttpError("Erreur lors de la mise à jour du stage", 500));
  }

  res
    .status(200)
    .json({
      message: "Stage mis à jour avec succès",
      updatedstage: stage.toObject({ getters: true }),
    });
};


exports.ajouterStage = ajouterStage;
exports.stagesComplet = stagesComplet;
exports.getStagesByEmployeurId = getStagesByEmployeurId;
exports.supprimerStage = supprimerStage;
exports.updateStage = updateStage;

