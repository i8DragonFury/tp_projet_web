import React from 'react';
import "./css/accueil.css"
import { NavLink } from 'react-router-dom';
const Accueil = () => {
  return (
    <div>
        <div>
            <h2>
            Bienvenue sur le site des stages de fin d'études des
            techniques de l'informatique du  Collège Montmorency!
            </h2>
        </div>
        
        <div>
            <h2>Étudiants</h2>
            À la fin de leurs études,
            les étudiants sont appelés à mettre en
            pratique les compétences acquises durant le programme.
            Cela se fait grâce à la participation d'entreprises de la
            région qui les accueillent afin de finaliser leurs
            formations. 
        
        </div>    
  
        <div>
            <h2>Employeurs</h2>
            Le Collège Montmorency
            offre ainsi aux employeurs l'occasion d'obtenir une
            main-d'œuvre compétente, tout en leur permettant de
            participer à la formation finale des
            étudiants.

        </div>
            
        <div>
            Le stage de fin d'études
            est une expérience concrète permettant d'acquérir une
            expérience professionnelle formatrice.
        
        </div>    
   
        <div>
            <h2>Compétences</h2>
            Les étudiants terminent
            la portion académique de leurs études en informatique
            selon une des deux voies de sortie du programme:
            Réseaux et sécurité informatique
            Développement d'applications informatiques

        </div>
      
    </div>
  );
};

export default Accueil;