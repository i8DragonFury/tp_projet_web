import React from 'react';
import "./css/faq.css"
import "./css/accueil.css"
import CardFAQ from '../../shared/components/FormElements/CardFAQ';
import { NavLink } from 'react-router-dom';
const FAQ = () => {
  return (
    <div>
        <h1> Foire aux Questions - FAQ</h1>
        <div>
            <CardFAQ 
                question="Est-ce que le stage est obligatoire?"
                rep="Le stage de fin d'études en informatique est obligatoire 
                pour l'obtention du diplôme collégial."
            />
            <CardFAQ 
                question="Quel est l'horaire de l'étudiant durant les stages?"
                rep="L'étudiant doit respecter l'horaire de l'entreprise durant son stage."
            />
            <CardFAQ 
                question="Est-ce que l'étudiant travaille pendant les journées pédagogiques et
                les journées de rattrapage?"
                rep="L'étudiant doit respecter l'horaire de l'entreprise durant son stage et ce même
                durant les journées pédagogiques et de rattrapage. "
            />
            <CardFAQ 
                question="Quelle est la durée d'un stage de fin d'études?"
                rep="La durée du stage est de 15 semaines pour les deux profils de sortie (réseaux et programmation)."
            />
            <CardFAQ 
                question="Quelles sont les dates prévues pour les stages?"
                rep="Les stages sont prévus du 21 janvier au 3 mai 2019."
            />
                  
        </div>
      
    </div>
  );
};

export default FAQ;