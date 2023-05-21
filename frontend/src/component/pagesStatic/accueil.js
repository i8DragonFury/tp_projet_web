import React from 'react';
import "./css/accueil.css"
import { NavLink } from 'react-router-dom';
const Accueil = () => {
  return (
    <div className='Accueil'>
        <div className='Accueil-image'></div>
        
        <div className='Accueil-title'>
            <p>
            Bienvenue sur le site des stages de fin d'études des
            techniques de l'informatique du Collège Montmorency!
            </p>
        </div>
        
        <div className='accueil-flex-box'>
            <div className='accueil-flex-ic'>
                <h2>Étudiants</h2>
                <span>
                    À la fin de leurs études,
                    les étudiants sont appelés à mettre en
                    pratique les compétences acquises durant le programme.
                    Cela se fait grâce à la participation d'entreprises de la
                    région qui les accueillent afin de finaliser leurs
                    formations.
                </span>
            </div>
            
            <div className='accueil-flex-ic'>
                <h2>Employeurs</h2>
                <span>
                    Le Collège Montmorency
                    offre ainsi aux employeurs l'occasion d'obtenir une
                    main-d'œuvre compétente, tout en leur permettant de
                    participer à la formation finale des
                    étudiants.
                </span>
                
             </div>    
   
            <div className='accueil-flex-ic'>
                <h2>Compétences</h2>
                Les étudiants terminent
                la portion académique de leurs études en informatique
                selon une des deux voies de sortie du programme:
                Réseaux et sécurité informatique
                Développement d'applications informatiques

            </div>
            <div>
            Le stage de fin d'études
            est une expérience concrète permettant d'acquérir une
            expérience professionnelle formatrice.
        
            </div>
        </div>    
  
        
            
        
      
    </div>
  );
};

export default Accueil;