var Projet = require('../Models/projetsModel');
var Matiere = require('../Models/matieresModel');
var Promo = require('../Models/promosModel');
var User = require('../Models/usersModel');
var CheckLog = require('../CheckLogin');

var router = require('express').Router();
var moment = require('moment');
var async = require('async');
// =====================================
// ENSEIGNANT ==========================
// =====================================

// Si chemin/create alors creerProjet sinon éditer sinon afficher
router.get('/projet/:id?', function(req, res, next){ CheckLog(req, res, next, "ENSEIGNANT");}, function(req, res)
{
	var data = {};
    var data2 = {};

	if(req.params.id) {
        if(req.param("id")=="create") {
			async.parallel([
                function (parallel_done) {
					var query = Promo.ObtAllPromos(function (err, rows) {
						if (err)
							res.status(500).render('errorRequest.ejs', {page_title:"Error P3", role:req.user.roleU, ressource: "/enseignant/projet"}+ req.param("id"));
						if (rows.length <= 0) {
							res.status(404).render('errorRessource.ejs', {
								page_title: "Error", role:req.user.roleU,
								ressource: "/enseignant/projet/" + req.param("id")
							});
						}
						data.table=rows;
						parallel_done();
                    });
                },
                function (parallel_done) {
                    var query1 = Matiere.ObtMatieresEnseignant(req.user.id, function (err, rows1) {
                        if (err)
                        {
                            res.status(500).render('errorRequest.ejs', {page_title:"Error M3", role:req.user.roleU, ressource: "/enseignant/projet"}+ req.param("id"));
                            return false;
                        }
                        if (rows1.length <= 0) {
                            res.status(404).render('errorRessource.ejs', {
                                page_title: "Error", role:req.user.roleU,
                                ressource: "/enseignant/projet/" + req.param("id")
                            });
                            return false;
                        }
                        data.table1 = rows1;
                        parallel_done();
                    });
                },
            ], function (err) {
                if (err)
                    res.status(500).render('errorRequest.ejs', {page_title:"Error A3", role:req.user.roleU, ressource: "/enseignant/projet"}+ req.param("id"));
                else
                    res.status(200).render('Projets/createProjet.ejs', {page_title: "createProjet", promos:data.table, matieres:data.table1, chemin: "enseignant/projet/"});
            });
        }
        else
        {
            async.parallel([
                function (parallel_done) {
                    var query = Projet.ObtProjetId(req.params.id, function (err, rows) {
                        if (err)
                        {
                            res.status(500).render('errorRequest.ejs', {page_title:"Error PR2", role:req.user.roleU, ressource: "/enseignant/projet"}+ req.param("id"));
                            return false;
                        }
                        if (rows.length <= 0) {
                            res.status(404).render('errorRessource.ejs', {
                                page_title: "Error", role:req.user.roleU,
                                ressource: "/enseignant/projet/" + req.param("id")
                            });
                            return false;
                        }

                        data.table = rows;
                        parallel_done();
                    });
                },
                function (parallel_done) {
                    var query1 = Promo.ObtAllPromos(function (err, rows2) {
                        if (err)
                        {
                            res.status(500).render('errorRequest.ejs', {page_title:"Error P2", role:req.user.roleU, ressource: "/enseignant/projet"}+ req.param("id"));
                            return false;
                        }
                        if (rows2.length <= 0) {
                            res.status(404).render('errorRessource.ejs', {
                                page_title: "Error", role:req.user.roleU,
                                ressource: "/enseignant/projet/" + req.param("id")
                            });
                            return false;
                        }
                        data.table1 = rows2;
                        parallel_done();
                    });
                },
				function (parallel_done) {
                    var query2 = Matiere.ObtMatieresEnseignant(req.user.id, function (err, rows3) {
                        if (err)
                        {
                            res.status(500).render('errorRequest.ejs', {page_title:"Error M2", role:req.user.roleU, ressource: "/enseignant/projet"}+ req.param("id"));
                            return false;
                        }
                        if (rows3.length <= 0) {
                            res.status(404).render('errorRessource.ejs', {
                                page_title: "Error", role:req.user.roleU,
                                ressource: "/enseignant/projet/" + req.param("id")
                            });
                            return false;
                        }
                        data.table2 = rows3;
                        parallel_done();
                    });
                },
            ], function (err) {
                if (err)
                    res.status(500).render('errorRequest.ejs', {page_title:"Error A2", role:req.user.roleU, ressource: "/enseignant/projet"}+ req.param("id"));
                else
                    res.status(200).render('Projets/detailProjet.ejs', {page_title: "detailProjet", matieres:data.table2, promos:data.table1, projet:data.table, chemin: "enseignant/projet/"});
            });
        }
    }
    else
    {
        async.parallel([
            function(parallel_done) {
                var query = Matiere.ObtMatieresEnseignant(req.user.id, function(err,rows)
                {
                    if(err)
                        res.status(500).render('errorRequest.ejs', {page_title:"Error M", role:req.user.roleU, ressource: "/enseignant/projet"});

                    data2.table = rows;
					console.log(data2.table);
                    parallel_done();
                });
            },
            function(parallel_done) {
                var query2 = Promo.ObtAllPromos(function (err, rows2) {
                    if (err)
                        res.status(500).render('errorRequest.ejs', {page_title:"Error P", role:req.user.roleU, ressource: "/enseignant/projet"});

                    data2.table1 = rows2;
					console.log(data2.table1);
                    parallel_done();
                });
            },
			function(parallel_done) {
                var query3 = Projet.ObtAllProjets(function (err, rows3) {
                    if (err)
                        res.status(500).render('errorRequest.ejs', {page_title:"Error Pr", role:req.user.roleU, ressource: "/enseignant/projet"});

                    data2.table2 = rows3;
					console.log(data2.table2);
                    parallel_done();
                });
            }
        ], function(err){
            if(err)
                res.status(500).render('errorRequest.ejs', {page_title:"Error A", role:req.user.roleU, ressource: "/enseignant/projet"});
            else
                res.status(200).render('Projets/allProjets.ejs',{page_title:"allProjets", matieres:data2.table, promos:data2.table1, projets:data2.table2, chemin:"enseignant/projet/"});
        });
    }
});

//Ajouter projet, si enseignant initiative étudiante projet == 1, si étudiant initiative étudiante == 0
router.post('/projet',function(req, res, next){ CheckLog(req, res, next, "ENSEIGNANT");}, function(req, res)
{
	initiativeEtudianteProjet = 0;
	statutProjet = 0;
	
	if(req.user.roleU == "ETUDIANT"){
		initiativeEtudianteProjet = 1;
	} else if(req.user.roleU == "ENSEIGNANT"){
		statutProjet = 1;
	}
	
    var query = Projet.PostProjet(req.body.nom, req.body.description, req.body.fonctionnalite, statutProjet, req.body.matiere, initiativeEtudianteProjet, function (err, rows) {
        if (err)
            res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/enseignant/projet"});
        else
            res.status(201).redirect('/enseignant/projet');
    });
});

//Modifier projet
router.put('/projet/:id?', function(req, res, next){ CheckLog(req, res, next, "ENSEIGNANT");}, function(req, res)
{
    if (req.param("id"))
    {
        var nomP = req.body.nom;
        var descriptionP = req.body.description;
        var fonctionnaliteP = req.body.fonctionnalite;
		var matiereP = req.body.matiere;
		
		console.log(descriptionP);
		console.log(matiereP);
		
        var query = Projet.PutProjetId(req.param("id"), nomP, descriptionP, fonctionnaliteP, matiereP, function (err, rows) {
            if (err)
                res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/enseignant/projet"}+ req.param("id"));
        });
    }
});

//Supprimer projet
router.delete('/projet/:id?', function(req, res, next){ CheckLog(req, res, next, "ENSEIGNANT");}, function(req, res)
{
    if(req.param("id")) {
        async.parallel([
            function(parallel_done) {

                var query = Projet.DelProjetId(req.param("id"), function (err, rows) {
                    if (err)
                        res.status(500).render('errorRequest.ejs', {
                            page_title: "Error", role:req.user.roleU,
                            ressource: "/enseignant/projet"
                        } + req.param("id"));

                    parallel_done();

                });
            }
            ], function(err){
                    if(err)
                        res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/enseignant/projet"});
        });
    }
});

router.get('/profile', function(req, res, next){ CheckLog(req, res, next, "ENSEIGNANT");}, function(req, res) {
    res.status(200).render('profile.ejs', { user : req.user });
});

module.exports = router;
