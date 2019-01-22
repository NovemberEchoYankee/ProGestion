# Documentation technique : 

## ROUTES /enseignant :

**GET** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/enseignantRoutes.js  
```js
router.get('/projet/:id?', function(req, res, next){ CheckLog(req, res, next, "ENSEIGNANT");}, function(req, res){
    ...
});
```
Requête qui renvoie la vue contenant tous les projets étudiants ou enseignant. Si un id est spécifier alors renvoie la vue modification du projet.

**POST** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/enseignantRoutes.js
```js
router.post('/projet',function(req, res, next){ CheckLog(req, res, next, "ENSEIGNANT");}, function(req, res){
	...
});
```
Requête qui créée un projet par initiative enseignante.

**PUT** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/enseignantRoutes.js
```js
router.put('/projet/:id?', function(req, res, next){ CheckLog(req, res, next, "ENSEIGNANT");}, function(req, res){
    ...
});
``` 
Requête qui modifie un projet avec tous ses paramêtres

**PUT** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/enseignantRoutes.js
```js
router.put('/projet/validate/:id?', function(req, res, next){ CheckLog(req, res, next, "ENSEIGNANT");}, function(req, res){
    ...
});
```
Permet à l’enseignant de valider un projet étudiant afin que celui ci apparaisse dans les projets validés. 

**DELETE** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/enseignantRoutes.js
```js
router.delete('/projet/:id?', function(req, res, next){ CheckLog(req, res, next, "ENSEIGNANT");}, function(req, res){
    ...
});
```
Requête qui va supprimer un projet de la base de données.

**GET** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/enseignantRoutes.js
```js
router.get('/profile', function(req, res, next){ CheckLog(req, res, next, "ENSEIGNANT");}, function(req, res) {
    res.status(200).render('profile.ejs', { user : req.user });
});
```
Renvoi le profil de l'enseignant

## ROUTES /etudiant :

**GET** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/etudiantRoutes.js
```js
router.get('/projet/:id?', function(req, res, next){ CheckLog(req, res, next, "ETUDIANT");}, function(req, res){
	...
});
```
Requête qui renvoie la vue contenant les projets par matière, si un id est spécifié redirection vers la vue modification, si url = create redirection vers la vue création projet

**POST** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/etudiantRoutes.js
```js
router.post('/projet',function(req, res, next){ CheckLog(req, res, next, "ETUDIANT");}, function(req, res){
	...
});
```
Requête qui créée un projet d'initiative étudiante.

**POST** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/etudiantRoutes.js
```js 
router.post('/projet/postule/:id?', function(req, res, next){ CheckLog(req, res, next, "ETUDIANT");}, function(req, res){
	...
});
```
Requête qui créée un groupe projet avec idEtudiant et idProjet

**GET** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/etudiantRoutes.js
```js
router.get('/profile', function(req, res, next){ CheckLog(req, res, next, "ETUDIANT");}, function(req, res) {
    res.status(200).render('profile.ejs', { user : req.user });
});
```
Renvoi le profil de l'enseignant

## ROUTES /admin :

**GET** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/matieresRoute.js 
```js
router.get('/users/:id?', function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function(req, res){
	...
});
```
Renvoie toutes les utilisateurs contenues dans la base de données et les affichent sous forme de groupes triés par promotion.

**POST** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/matieresRoute.js
```js
router.post('/createUser', function(req, res) {
	...
});
```
Route qui permet à l’administrateur de créer un nouvel utilisateur, si étudiant choisir une promotion.

**PUT** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/matieresRoute.js
```js
router.put('/users/:id?', function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function(req, res){
	...
});
```
Route qui permet à l’administrateur de modifier un utilisateur

**DELETE** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/matieresRoute.js
```js
router.delete('/users/:id?', function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function(req, res) {
	...
});
```
Permet à l’administrateur de supprimer un utilisateur.

**GET** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/promosRoute.js 
```js
router.get('/promotions/:id?', function(req, res, next) {CheckLog(req, res, next, "ADMINISTRATION");},function(req, res)
```
Renvoi toutes les promotions contenues dans la base de données et les affichent sous forme de groupes triés par promotion.

**POST** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/promosRoute.js
```js
router.post('/promotions', function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function(req, res)
```
Route qui permet à l’administrateur de créer une nouvelle promotion.

**PUT** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/promosRoute.js
```js
router.put('/promotions/:id?', function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function(req, res)
``` 
Route qui permet à l'administrateur de modifier une promotion.

**DELETE** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/promosRoute.js  
```js
router.delete('/promotions/:id?', function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function(req, res)
```
Route qui permet à l’administrateur de supprimer une promotion.

**GET** https://github.com/melninie/QRCodeProjet/blob/master/QRCodeProjet/app/Routes/seancesRoute.js  
```js
router.get('/seances/:id?', function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function(req, res)
```
Route qui permet à l'utilisateur d’accéder à la vue des séances, il lui sera retourné une page contenant l’intégralité 
des séances contenues dans la base de données. Les séances seront regroupées et triées par matières.

**GET** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/usersRoute.js
```js
router.get('/users/:id?', function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function(req, res)
```
Route qui permet de récupérer la vue utilisateur qui renvoie les différents “users” présent dans la base de données en fonction de 
leurs rôles (étudiants, enseignants ou administration).

**PUT** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/usersRoute.js
```js
router.put('/users/:id?', function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function(req, res)
```
Permet à l’administration de modifier les caractéristiques d’un utilisateur, il peut modifier son nom, prénom, mail et promotion dans 
le cas d’un étudiant par exemple.

**POST** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/usersRoute.js
```js
router.post('/upload/:id&:img', function(req, res)
```
Permet de mettre a jour la photo de profile de l'utilisateur de type étudiant.

**DELETE** https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/usersRoute.js
```js
router.delete('/users/:id?', function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function(req, res)
```
Permet à l’administration de supprimer un utilisateur dans la base de données.

## ROUTES PRINCIPALES :

### ROUTE Accueil :
https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/routes.js
**GET** / :
```js
app.get('/', function(req, res) {
	res.render('login.ejs', { message: req.flash('loginMessage') });
});
```
Renvoi vers la vue login afin de se connecter.

### ROUTES login :
https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/routes.js
**GET** /login :
```js
app.get('/login', function(req, res) {
	res.render('login.ejs', { message: req.flash('loginMessage') });
});
```
Route Qui affiche une vue indiquant à l’utilisateur de se connecter à l’application.

https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/routes.js
**POST** /login :
```js
app.post('/login', function(req, res) {
	var returnTo = req.session.returnTo||'redirectByRole';
	passport.authenticate('local-login', {
		successRedirect : returnTo,
		failureRedirect : '/login',
		failureFlash : true
	})(req, res	);
});
```
Renvoie le login au serveur et vérifie celui-ci avant de permettre à l’utilisateur de pouvoir se connecter.

### ROUTE redirection :
https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/routes.js 
**GET** /redirectByRole :
```js
app.get('/redirectByRole', function(req, res) {
	switch(req.user.roleU){
		case "ETUDIANT":
			var returnTo = "profile";
			Break;
		case "ENSEIGNANT":
			var returnTo = "enseignant/seance";
			Break;
		case "ADMINISTRATION":
			var returnTo = "admin/";
			Break;
		}
	res.redirect(returnTo);
});	
```
Après validation du login, cette route va permettre de rediriger l’utilisateur vers la page qui correspond à son rôle 
(Etudiants, Enseignants ou Administration).

### ROUTE profile :
https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/routes.js
**GET** /profile :
```js
app.get('/admin/profile', function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function(req, res) {
	res.status(200).render('profile.ejs', { user : req.user });
});
```
Cette route donne accès à la vue profile d’un utilisateur de type administrateur, celui-ci peut ainsi consulter les informations 
le concernant.

### ROUTE accueil administration :
https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/routes.js   
**GET** /admin :
```js
app.get('/admin',function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function (req, res)
```
Cette route donne accès à la vue d’accueil de l’administration lorsqu’un utilisateur authentifié en tant que ADMINSITRATION se connecte.

### ROUTE déconnexion : 
https://github.com/NovemberEchoYankee/ProGestion/blob/master/app/Routes/routes.js  
**GET** /logout :
```js
app.get('/logout', function(req, res) 
```
Cette route permet à n’importe quel utilisateur de se déconnecter depuis toutes les vues possédant le bouton déconnexion.

## Spécification de l'API REST :

| **HTTP verb** | **URL**                  | **Response URL** | **Response body** | **Reason** |
|-----------|------------------------------|--------------|---------------|--------|
| GET       | /enseignant/seance           | 200          | Retourne toutes les séances de l'enseignant |     |
|           |                              | 500          |               | Erreur interne du serveur |
| PUT       | /enseignant/seance/:id?      | 500          |               | Erreur interne du serveur |
| GET       | /etudiant/seance/:id?        | 200          | Retourne la séances que l'étudiant doit valider |        |
|           |                              | 404          |               | Ressource non trouvée |
|           |                              | 500          |               | Erreur interne du serveur |
| POST      | /etudiant/seance/:id?        | 201          | Crée la validation d'une séance |        |
|           |                              | 500          |               | Erreur interne du serveur |
| GET       | /admin/matieres/:id?         | 200          | Retourne une matière demandé |        |
|           |                              | 404          |               | Ressource non trouvée |
|           |                              | 500          |               | Erreur interne du serveur |
| POST      | /admin/matieres              | 201          | Crée une matière dans la table |        |
|           |                              | 500          |               | Erreur interne du serveur |
| PUT       | /admin/matieres/:id?         | 500          |               | Erreur interne du serveur |
| DELETE    | /admin/matieres/:id?         | 500          |               | Erreur interne du serveur |
| GET       | /admin/promotions/:id?       | 200          | Retourne une promotion demandé |        |
|           |                              | 404          |               | Ressource non trouvée |
|           |                              | 500          |               | Erreur interne du serveur |
| POST      | /admin/promotions            | 201          | Crée une promotion dans la table |        |
|           |                              | 500          |               | Erreur interne du serveur |
| PUT       | /admin/promotions/:id?       | 500          |               | Erreur interne du serveur |
| DELETE    | /admin/promotions/:id?       | 500          |               | Erreur interne du serveur |
| GET       | /admin/seances/:id?          | 200          | Retourne une séance demandé |        |
|           |                              | 404          |               | Ressource non trouvée |
|           |                              | 500          |               | Erreur interne du serveur |
| POST      | /admin/seances               | 201          | Crée une séance dans la table |        |
|           |                              | 500          |               | Erreur interne du serveur |
| PUT       | /admin/seances/:id?          | 500          |               | Erreur interne du serveur |
| DELETE    | /admin/seances/:id?          | 500          |               | Erreur interne du serveur |
| GET       | /admin/users/:id?            | 200          | Retourne un utilisateur demandé |        |
|           |                              | 404          |               | Ressource non trouvée |
|           |                              | 500          |               | Erreur interne du serveur |
| PUT       | /admin/users/:id?            | 500          |               | Erreur interne du serveur |
| DELETE    | /admin/users/:id?            | 500          |               | Erreur interne du serveur |
| GET       | /                            | 200          | Retourne la page d'acceuil |        |
| GET       | /login                       | 200          | Retourne la connexion |        |
| POST      | /login                       |              | Renvoi les données entrées |        |
| GET       | /redirectByRole              | 200          | Retourne la page attribué a chaque type d'utilisateur |        |
| GET       | /admin/users/create          | 201          | Crée un compte utilisateur |        |
|           |                              | 404          |               | Ressource non trouvée |
|           |                              | 500          |               | Erreur interne du serveur |
| POST      | /admin/users                 |              | Renvoi les données liées au compte utilisateur              |        |
| GET       | /profile                     | 200          | Retourne la page profile de l'utilisateur |        |
| GET       | /admin                       | 200          | Retourne l'acceuil administrateur |        |
| GET       | /logout                      | 200          | Déconnecte l'utilisateur et retourne la page de connexion |        |

## Technologies utilisées : 

Afin de réaliser ce projet nous avons travailler avec divers technologies qui nous ont permis de mener à bien ce projet :
* Nous avons utilisés l'outil **Notepad++** pour l'IDE.
* Afin de garder un oeil sur les changements dans Github, nous avons utilisé l'outil **SmartGit** 
* Nous nous sommes servi de **EasyPHP** et de **PHPMyAdmin** en tant que serveur et de database
* Pour pouvoir communiquer entre nous, nous avons utilisé divers outils comme **Discord**, **Whatsapp** mais aussi **Trello** qui nous 
a permis de faire un suivi de projet complet
* Nous avons développé ce projet sous **NodeJS** et **EJS**, et nous nous sommes servi de **SQL** afin d'écrire les différentes requètes
* Enfin nous avons utilisé **Boostrap** afin de donner du style à notre site
