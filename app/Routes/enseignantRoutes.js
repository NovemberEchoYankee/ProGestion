var Projet = require('../Models/projetsModel');
var Matiere = require('../Models/matieresModel');
var Promo = require('../Models/promosModel');
var CheckLog = require('../CheckLogin');

var router = require('express').Router();
var moment = require('moment');

// =====================================
// ENSEIGNANT ==========================
// =====================================

router.get('/projet', function(req, res, next){ CheckLog(req, res, next, "ENSEIGNANT");}, function(req, res)
{
	var data = {};

	var tabPromos = [];
	var tabMatieres = [];
	var tabprojets = [];

	var query = Promo.ObtAllPromos(function (err, rows) {
		if (err){
			res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/enseignant/projet/"});
		}
		else{
			data.table=rows;
			rows.forEach(function(element) {
				tabPromos.push(element);	
			});
		}
	});
	
	idEnseignant = req.user.id;
	var query2 = Matiere.ObtMatieresEnseignant(idEnseignant, function (err, rows2) 
	{
		if (err){
			res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/enseignant/projet/"});
		}
		else{
			rows2.forEach(function(element) {
				tabMatieres.push(element);	
			});
		}
	});
	
	var query3 = Projet.ObtAllProjets(function(err,rows3)
	{
		if(err)
			res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/enseignant/projet/"});

		rows3.forEach(function(element) {
			tabprojets.push(element);
		});
	});

		res.status(200).render('Projets/allProjets.ejs',{page_title:"allProjets", promotions:data.table, promos:tabPromos, matieres:tabMatieres, projets:tabprojets, chemin:"enseignant/projet/"});
});

router.get('/syntheseProjet', function(req, res, next){ CheckLog(req, res, next, "ENSEIGNANT");}, function(req, res)
{
	var data = {};

	var tabPromos = [];
	var tabMatieres = [];
	var tabprojets = [];

	var query = Promo.ObtAllPromos(function (err, rows) {
		if (err){
			res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/enseignant/syntheseProjet/"});
		}
		else{
			rows.forEach(function(element) {
				tabPromos.push(element);	
			});
		}
	});
	
	var query = Matiere.ObtAllMatieres(function (err, rows) 
	{
		if (err){
			res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/enseignant/syntheseProjet/"});
		}
		else{
			rows.forEach(function(element) {
				tabMatieres.push(element);	
			});
		}
	});
	
	var query = Projet.ObtAllProjets(function(err,rows)
	{
		if(err)
			res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/enseignant/syntheseProjet/"});

		rows.forEach(function(element) {
			tabprojets.push(element);
		});
	});

		res.status(200).render('Projets/syntheseProjets.ejs',{page_title:"allProjets", promos:tabPromos, matieres:tabMatieres, projets:tabprojets, chemin:"enseignant/projet/"});
});


router.put('/projet/:id?', function(req, res, next){ CheckLog(req, res, next, "ENSEIGNANT");}, function(req, res)
{
    if (req.param("id"))
    {
        var commentaire = req.body.commentaire;
        var id = req.param("id");

        var query = Seance.ValiderSeance(id, commentaire, function (err, rows) {
            if (err)
                res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/enseignant/seance"}+ req.param("id"));
        });
    }
});

router.get('/profile', function(req, res, next){ CheckLog(req, res, next, "ENSEIGNANT");}, function(req, res) {
    res.status(200).render('profile.ejs', { user : req.user });
});

module.exports = router;
