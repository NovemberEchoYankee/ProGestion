var connection=require('../../config/dbconnection');

var Projet={
    // ObtAllProjets:function(callback)
    // {
        // return connection.query("select pr.*, m.nomM, m.promotionM, p.nomP"
		// + "from projet pr"
		// + "inner join matiere m ON pr.matiereProjet=m.idM"
		// + "inner join promotion p on m.promotionM=p.idP"
		// + "Order by m.nomM", callback);
    // },
	
	ObtAllProjets:function(callback)
    {	
		return connection.query("select pr.*, m.nomM, m.promotionM, p.nomP, g.idG "
		+ "from projet pr "
		+ "inner join matiere m ON pr.matiereProjet=m.idM "
		+ "inner join promotion p on m.promotionM=p.idP "
		+ "left join groupe g on pr.idProjet=g.projetG "
		+ "Order by pr.idProjet ASC", callback);
	},


    ObtProjetId:function(id, callback) {
        return connection.query("select * from projet where idProjet=?", [id], callback)
    },

    PostProjet: function(nom, description, fonctionnalite, statut, matiere, initiativeEtudiante, callback){
        return connection.query("INSERT INTO projet (nomProjet, descriptionProjet, fonctionnaliteProjet, statutProjet, matiereProjet, initiativeEtudianteprojet) values (?,?,?,?,?,?)", [nom, description, fonctionnalite, statut, matiere, initiativeEtudiante], callback);
    },
	
    PutProjetId:function(id, nomP, descriptionP, fonctionnaliteP, matiereP, callback) {
        return connection.query("update projet SET nomProjet=?, descriptionProjet=?, fonctionnaliteProjet=?, matiereProjet=? where idProjet=?", [nomP, descriptionP, fonctionnaliteP, matiereP, id], callback)
    },
	
	PutValideProjetId:function(id, callback) {
        return connection.query("update projet SET statutProjet=1 where idProjet=?", [id], callback)
    },
	
		/*
    ObtSeancesFiche:function(idPromo, date, callback){
        return connection.query("SELECT s.idS, s.nomS, s.dateS, s.heureDebut, s.heureFin, s.valideS, m.idM, m.nomM, p.idP, p.nomP, u.nomU, u.prenomU "
            + "from seance s "
            + "inner join matiere m on s.matiereS=m.idM "
            + "inner join users u on s.userS=u.id "
            + "inner join promotion p on m.promotionS=p.idP "
            + "where s.dateS=? and idP=? "
            + "Order By s.heureDebut", [date, idPromo], callback);
    },

    ObtSeanceEnseignant:function(idEnseignant, callback){
        return connection.query("SELECT s.idS, s.nomS, s.dateS, s.heureDebut, s.heureFin, s.valideS, "
            + "m.idM, m.nomM, "
            + "p.idP, p.nomP "
            + "from seance s "
            + "inner join matiere m on s.matiereS=m.idM "
            + "inner join promotion p on m.promotionS=p.idP "
            + "where s.userS=? and s.valideS=0 Order By s.dateS, s.heureFin LIMIT 1", [idEnseignant], callback);
    },

    ObtEtudiantEnseignant:function(idSeance, callback){
        return connection.query("SELECT u.id, u.nomU, u.prenomU, imageprofileU from seance s "
            + "inner join matiere m on s.matiereS=m.idM "
            + "inner join promotion p on m.promotionS=p.idP "
            + "inner join users u on p.idP=u.promotionU "
            + "where s.idS=? Order By u.nomU, u.prenomU", [idSeance], callback);
    },

    ObtBadgeEtuSeance:function(idEtudiant, idSeance, callback){
        return connection.query("SELECT * from badge where utilisateurB=? and seanceB=?", [idEtudiant, idSeance], callback);
    },
	
    NbPresentSeance:function(idSeance, callback)
    {
        return connection.query("SELECT count(*) AS nbPresent from badge where seanceB=?", [idSeance], callback);
    },

    CheckSeance: function(nom, date, hDebut, hFin, matiere, enseignant, callback){
        return connection.query("SELECT * FROM seance WHERE nomS=? and dateS=? and heureDebut=? and heureFin=? and matiereS=?, userS=?",[nom, date, hDebut, hFin, matiere, enseignant], callback)
    },*/

    DelProjetId:function(id) {
        return connection.query("delete from projet where idProjet=?", [id])
    },

    DelProjetByMatiere:function(id) {
        return connection.query("delete from projet where matiereprojet=?", [id])
    }

};
module.exports=Projet;
