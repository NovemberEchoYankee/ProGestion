var Etudiant = require('../Models/etudiantModel');
var CheckLog = require('../CheckLogin');
var Projet = require('../Models/projetsModel');
var Matiere = require('../Models/matieresModel');
var Promo = require('../Models/promosModel');
var User = require('../Models/usersModel');
var Groupe = require('../Models/groupesModel');

var router = require('express').Router();
var format = require('date-format');
var async = require('async');
var moment = require('moment');

// =====================================
// ETUDIANT ==========================
// =====================================

// Si chemin/create alors envoyer vers creerProjet sinon vers éditer sinon afficher
router.get('/projet/:id?', function(req, res, next){ CheckLog(req, res, next, "ETUDIANT");}, function(req, res)
{
	var data = {};
    var data2 = {};

	if(req.params.id) {
        if(req.param("id")=="create") {
			async.parallel([
                function (parallel_done) {
					var query = Promo.ObtAllPromos(function (err, rows) {
						if (err)
							res.status(500).render('errorRequest.ejs', {page_title:"Error P3", role:req.user.roleU, ressource: "/etudiant/projet"}+ req.param("id"));
						if (rows.length <= 0) {
							res.status(404).render('errorRessource.ejs', {
								page_title: "Error", role:req.user.roleU,
								ressource: "/etudiant/projet/" + req.param("id")
							});
						}
						data.table=rows;
						parallel_done();
                    });
                },
                function (parallel_done) {
                    var query1 = Matiere.ObtMatieresEtudiant(req.user.id, function (err, rows1) {
                        if (err)
                        {
                            res.status(500).render('errorRequest.ejs', {page_title:"Error M3", role:req.user.roleU, ressource: "/etudiant/projet"}+ req.param("id"));
                            return false;
                        }
                        if (rows1.length <= 0) {
                            res.status(404).render('errorRessource.ejs', {page_title: "Error", role:req.user.roleU, ressource: "/etudiant/projet/" + req.param("id")
                            });
                            return false;
                        }
                        data.table1 = rows1;
                        parallel_done();
                    });
                },
            ], function (err) {
                if (err)
                    res.status(500).render('errorRequest.ejs', {page_title:"Error A3", role:req.user.roleU, ressource: "/etudiant/projet"}+ req.param("id"));
                else
                    res.status(200).render('Projets/createProjet.ejs', {page_title: "createProjet", promos:data.table, matieres:data.table1, chemin: "etudiant/projet/"});
            });
        }
        else
        {
            async.parallel([
                function (parallel_done) {
                    var query = Projet.ObtProjetId(req.params.id, function (err, rows) {
                        if (err)
                        {
                            res.status(500).render('errorRequest.ejs', {page_title:"Error PR2", role:req.user.roleU, ressource: "/etudiant/projet"}+ req.param("id"));
                            return false;
                        }
                        if (rows.length <= 0) {
                            res.status(404).render('errorRessource.ejs', {
                                page_title: "Error", role:req.user.roleU,
                                ressource: "/etudiant/projet/" + req.param("id")
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
                            res.status(500).render('errorRequest.ejs', {page_title:"Error P2", role:req.user.roleU, ressource: "/etudiant/projet"}+ req.param("id"));
                            return false;
                        }
                        if (rows2.length <= 0) {
                            res.status(404).render('errorRessource.ejs', {
                                page_title: "Error", role:req.user.roleU,
                                ressource: "/etudiant/projet/" + req.param("id")
                            });
                            return false;
                        }
                        data.table1 = rows2;
                        parallel_done();
                    });
                },
				function (parallel_done) {
                    var query2 = Matiere.ObtMatieresEtudiant(req.user.id, function (err, rows3) {
                        if (err)
                        {
                            res.status(500).render('errorRequest.ejs', {page_title:"Error M2", role:req.user.roleU, ressource: "/etudiant/projet"}+ req.param("id"));
                            return false;
                        }
                        if (rows3.length <= 0) {
                            res.status(404).render('errorRessource.ejs', {
                                page_title: "Error", role:req.user.roleU,
                                ressource: "/etudiant/projet/" + req.param("id")
                            });
                            return false;
                        }
                        data.table2 = rows3;
                        parallel_done();
                    });
                },
            ], function (err) {
                if (err)
                    res.status(500).render('errorRequest.ejs', {page_title:"Error A2", role:req.user.roleU, ressource: "/etudiant/projet"}+ req.param("id"));
                else
                    res.status(200).render('Projets/detailProjet.ejs', {page_title: "detailProjet", matieres:data.table2, promos:data.table1, projet:data.table, chemin: "etudiant/projet/"});
            });
        }
    }
    else
    {
        async.parallel([
            function(parallel_done) {
                var query = Matiere.ObtMatieresEtudiant(req.user.id, function(err,rows)
                {
                    if(err)
                        res.status(500).render('errorRequest.ejs', {page_title:"Error M", role:req.user.roleU, ressource: "/etudiant/projet"});

                    data2.table = rows;
					console.log(data2.table);
                    parallel_done();
                });
            },
            function(parallel_done) {
                var query2 = Promo.ObtAllPromos(function (err, rows2) {
                    if (err)
                        res.status(500).render('errorRequest.ejs', {page_title:"Error P", role:req.user.roleU, ressource: "/etudiant/projet"});

                    data2.table1 = rows2;
					console.log(data2.table1);
                    parallel_done();
                });
            },	
			function(parallel_done) {
                var query3 = Projet.ObtAllProjets(function (err, rows3) {
                    if (err)
					{
                        res.status(500).render('errorRequest.ejs', {page_title:"Error Pr", role:req.user.roleU, ressource: "/etudiant/projet"});
					}	
					data2.table2 = rows3;
					console.log(data2.table2);	
                    parallel_done();
                });
            },	
			function(parallel_done) {
                var query4 = User.ObtAllEtudiants(function (err, rows4) {
                    if (err)
					{
                        res.status(500).render('errorRequest.ejs', {page_title:"Error Pr", role:req.user.roleU, ressource: "/etudiant/projet"});
					}	
					data2.table3 = rows4;
					console.log(data2.table3);	
                    parallel_done();
                });
            }
        ], function(err){
            if(err)
                res.status(500).render('errorRequest.ejs', {page_title:"Error A", role:req.user.roleU, ressource: "/etudiant/projet"});
            else
                res.status(200).render('Etudiant/allProjetsEtudiant.ejs',{page_title:"allProjets", matieres:data2.table, promos:data2.table1, projets:data2.table2, etudiants:data2.table3, chemin:"etudiant/projet/"});
        });
    }
});

//Ajouter projet, si enseignant initiative étudiante projet == 1, si étudiant initiative étudiante == 0
router.post('/projet',function(req, res, next){ CheckLog(req, res, next, "ETUDIANT");}, function(req, res)
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
            res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/etudiant/projet"});
        else
            res.status(201).redirect('/etudiant/projet');
    });
});

//Créer groupe projet et étudiant 
router.post('/projet/postule/:id?', function(req, res, next){ CheckLog(req, res, next, "ETUDIANT");}, function(req, res)
{
	if(req.param("id")) {
		async.parallel([
			function (parallel_done) {
				var query = Groupe.PostGroupe(req.param("id"), req.user.id, function (err, rows) {
					if (err)
						res.status(500).render('errorRequest.ejs', {page_title:"Error P3", role:req.user.roleU, ressource: "/etudiant/projet"}+ req.param("id"));
					
					parallel_done();
				});
			}/*,
			function (parallel_done) {
				var query1 = Groupe.PutGroupeEtudiant( ,req.user.id, function (err, rows1) {
					if (err)
					{
						res.status(500).render('errorRequest.ejs', {page_title:"Error M3", role:req.user.roleU, ressource: "/etudiant/projet"}+ req.param("id"));
						return false;
					}
					if (rows1.length <= 0) {
						res.status(404).render('errorRessource.ejs', {page_title: "Error", role:req.user.roleU, ressource: "/etudiant/projet/" + req.param("id")
						});
						return false;
					}
					data.table1 = rows1;
					parallel_done();
				});
			},*/
		], function (err) {
			if (err)
				res.status(500).render('errorRequest.ejs', {page_title:"Error A3", role:req.user.roleU, ressource: "/etudiant/projet"}+ req.param("id"));
			else
				res.status(200).redirect('/etudiant/projet');
		});
	}
});


router.get('/profile', function(req, res, next){ CheckLog(req, res, next, "ETUDIANT");}, function(req, res) {
    res.status(200).render('profile.ejs', { user : req.user });
});


module.exports = router;

