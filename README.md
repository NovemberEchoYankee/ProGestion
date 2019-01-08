# ProGestion
Projet de M2 - Gestion des projets SOA

Etudiant : 
* Yann Bourgues
* Ewen Fayat  
* Nicolas MIR

## Présentation du projet :  
Ce projet consiste à mettre en place une application qui permettra à un enseignant de gérer les projets de sa matière.

Existant :
* None

Fonctionnalités faites :
* Import CSV pour inscrire des étudiants/enseignants --> B1.2
* Mise à jour du visuel (tableau, liste, ...)
* Génération PDF de la feuille de présence et envoie par mail --> B1.3

 Un administrateur créé les enseignants qui auront accès à l'application, il peut gérer les utilisateurs.
 Il peut créer aussi des promotions, des matières.
 
 Un enseignant peut créer des projets dit "initiative enseignante", il peut valider des projets dit "initiative étudiante".
 
 Un étudiant peut s'inscrire sur un projet existant et il a la possibilité d'en créer un.
  
Ci-dessous un schéma qui résume le déroulement du processus réalisé :
  
![Déroulement du processus](processus.png)   
  
Ci-après le schéma de la base de données : 
  
![Base de données](Screenshot_6.png)
  
Afin de faire une prévisualisation de l'application, nous avons créé 2 maquettes représentant,  
La page de connexion :  
  
![Page de connexion maquette](Page_de_connexion.png)

Rendu final de la page de connexion 
![Page de connexion effective](connexion_qrcode.PNG)
  
La feuille de présence dématerialisé :
  
![Feuille](Feuille_de_présence.png)  

Rendu visuel final de la page de validation de la séance (version tableau)

![valide_seance_tab](seances_valider.png) 

Rendu visuel final de la page de validation de la séance (version trombinoscope)

![valide_seance_tromb](valide_cours_part3.PNG) 

Un exemple de la page séance qui affiche les séances par promo et par matière

![affichage_seance](page_seance_qrcode.PNG) 

Un exemple de la version PDF d'une feuille de présence

![génération_pdf](feuille_presence_exemple.png) 
