var Matiere = require('../Models/matieresModel');
var Promotion = require('../Models/promosModel');
var User = require('../Models/UsersModel');
var CheckLog = require('../CheckLogin');

var router = require('express').Router();
var async = require('async');

// =====================================
// MATIERES ==========================
// =====================================

// Ajouter matière sinon Editer matière sinon voir les matières
router.get('/matieres/:id?', function(req, res, next) {CheckLog(req, res, next, "ADMINISTRATION");},function(req, res) {

    var data = {};
    var data2 = {};

    if(req.params.id) {
        if(req.param("id")=="create") {
			async.parallel([
                function (parallel_done) {
					var query = Promotion.ObtAllPromos(function (err, rows) {
						if (err)
							res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/admin/matiere"}+ req.param("id"));
						if (rows.length <= 0) {
							res.status(404).render('errorRessource.ejs', {
								page_title: "Error", role:req.user.roleU,
								ressource: "/admin/matieres/" + req.param("id")
							});
						}
						data.table=rows;
						parallel_done();
                    });
                },
                function (parallel_done) {
                    var query1 = User.ObtAllEnseignants(function (err, rows1) {
                        if (err)
                        {
                            res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/admin/matiere"}+ req.param("id"));
                            return false;
                        }
                        if (rows1.length <= 0) {
                            res.status(404).render('errorRessource.ejs', {
                                page_title: "Error", role:req.user.roleU,
                                ressource: "/admin/matieres/" + req.param("id")
                            });
                            return false;
                        }
                        data.table1 = rows1;
                        parallel_done();
                    });
                },
            ], function (err) {
                if (err)
                    res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/admin/matiere"}+ req.param("id"));
                else
                    res.status(200).render('Matieres/createMatiere.ejs', {page_title: "createMatiere", promos:data.table, matieres:data.table2, enseignants:data.table1, chemin: "admin/matieres/"});
            });
        }
        else
        {
            async.parallel([
                function (parallel_done) {
                    var query = Matiere.ObtMatiereId(req.params.id, function (err, rows) {
                        if (err)
                        {
                            res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/admin/matiere"}+ req.param("id"));
                            return false;
                        }
                        if (rows.length <= 0) {
                            res.status(404).render('errorRessource.ejs', {
                                page_title: "Error", role:req.user.roleU,
                                ressource: "/admin/matieres/" + req.param("id")
                            });
                            return false;
                        }

                        data.table1 = rows;
                        parallel_done();
                    });
                },
                function (parallel_done) {
                    var query1 = Promotion.ObtAllPromos(function (err, rows2) {
                        if (err)
                        {
                            res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/admin/matiere"}+ req.param("id"));
                            return false;
                        }
                        if (rows2.length <= 0) {
                            res.status(404).render('errorRessource.ejs', {
                                page_title: "Error", role:req.user.roleU,
                                ressource: "/admin/matieres/" + req.param("id")
                            });
                            return false;
                        }
                        data.table2 = rows2;
                        parallel_done();
                    });
                },
				function (parallel_done) {
                    var query2 = User.ObtAllEnseignants(function (err, rows3) {
                        if (err)
                        {
                            res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/admin/matiere"}+ req.param("id"));
                            return false;
                        }
                        if (rows3.length <= 0) {
                            res.status(404).render('errorRessource.ejs', {
                                page_title: "Error", role:req.user.roleU,
                                ressource: "/admin/matieres/" + req.param("id")
                            });
                            return false;
                        }
                        data.table3 = rows3;
                        parallel_done();
                    });
                },
            ], function (err) {
                if (err)
                    res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/admin/matiere"}+ req.param("id"));
                else
                    res.status(200).render('Matieres/detailMatiere.ejs', {page_title: "detailMatiere", matieres:data.table1, promos:data.table2, enseignants:data.table3, chemin: "admin/matieres/"});
            });
        }
    }
    else
    {
        async.parallel([
            function(parallel_done) {
                var query = Matiere.ObtAllMatieres(function(err,rows)
                {
                    if(err)
                        res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/admin/matiere"});

                    data2.table1 = rows;
                    parallel_done();
                });
            },
            function(parallel_done) {
                var query2 = Promotion.ObtAllPromos(function (err, rows2) {
                    if (err)
                        res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/admin/matiere"});

                    data2.table2 = rows2;
                    parallel_done();
                });
            }
        ], function(err){
            if(err)
                res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/admin/matiere"});
            else
                res.status(200).render('Matieres/allMatieres.ejs',{page_title:"allMatieres", matieres:data2.table1, promos:data2.table2, chemin:"admin/matieres/"});
        });
    }
});

//Ajouter matiere
router.post('/matieres',function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function(req, res)
{
    var query = Matiere.PostMatiere(req.body.nom, req.body.promo, req.body.enseignant, function (err, rows) {
        if (err)
            res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/admin/matiere"});
        else
            res.status(201).redirect('/admin/matieres');
    });
});

//Modifier matiere
router.put('/matieres/:id?', function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function(req, res)
{
    if (req.param("id"))
    {
        var nomM = req.body.nom;
        var promotionM = req.body.promo;
		var enseignantM = req.body.enseignant;

        var query = Matiere.PutMatiereId(req.param("id"), nomM, promotionM, enseignantM, function (err, rows) {
            if (err)
                res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/admin/matiere"}+ req.param("id"));
        });
    }
});

//Supprimer matiere
router.delete('/matieres/:id?', function(req, res, next){ CheckLog(req, res, next, "ADMINISTRATION");}, function(req, res)
{
    if(req.param("id")) {
        async.parallel([
            function(parallel_done) {

                var query = Matiere.DelMatiereId(req.param("id"), function (err, rows) {
                    if (err)
                        res.status(500).render('errorRequest.ejs', {
                            page_title: "Error", role:req.user.roleU,
                            ressource: "/admin/matiere"
                        } + req.param("id"));

                    parallel_done();

                });
            },
            function(parallel_done) {
                var query2 = Seance.DelSeanceByMatiere(req.param("id"), function (err, rows) {
                    if (err)
                        res.status(500).render('errorRequest.ejs', {
                            page_title: "Error", role:req.user.roleU,
                            ressource: "/admin/matiere/" + req.param("id")
                        });

                    parallel_done();

                });
            }
            ], function(err){
                    if(err)
                        res.status(500).render('errorRequest.ejs', {page_title:"Error", role:req.user.roleU, ressource: "/admin/matiere"});
        });
    }
});

module.exports = router;

