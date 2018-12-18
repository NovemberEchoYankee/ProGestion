var connection=require('../../config/dbconnection');

var Projet={
	
	// Obtenir tous les projets
	ObtAllProjets:function(callback)
    {	
		return connection.query("select pr.*, m.nomM, m.promotionM, p.nomP, g.idG "
		+ "from projet pr "
		+ "inner join matiere m ON pr.matiereProjet=m.idM "
		+ "inner join promotion p on m.promotionM=p.idP "
		+ "left join groupe g on pr.idProjet=g.projetG "
		+ "Order by pr.idProjet ASC", callback);
	},

	// Obtenir un projet avec id donné
    ObtProjetId:function(id, callback) {
        return connection.query("select * from projet where idProjet=?", [id], callback)
    },

	// Créer un projet
    PostProjet: function(nom, description, fonctionnalite, statut, matiere, initiativeEtudiante, callback){
        return connection.query("INSERT INTO projet (nomProjet, descriptionProjet, fonctionnaliteProjet, statutProjet, matiereProjet, initiativeEtudianteprojet) values (?,?,?,?,?,?)", [nom, description, fonctionnalite, statut, matiere, initiativeEtudiante], callback);
    },
	
	// Modifier un projet avec un id donné
    PutProjetId:function(id, nomP, descriptionP, fonctionnaliteP, matiereP, callback) {
        return connection.query("update projet SET nomProjet=?, descriptionProjet=?, fonctionnaliteProjet=?, matiereProjet=? where idProjet=?", [nomP, descriptionP, fonctionnaliteP, matiereP, id], callback)
    },
	
	// Modifier statut projet de 0 à 1 avec un id donné
	PutValideProjetId:function(id, callback) {
        return connection.query("update projet SET statutProjet=1 where idProjet=?", [id], callback)
	},

	// Supprimer un projet avec un id donné
    DelProjetId:function(id) {
        return connection.query("delete from projet where idProjet=?", [id])
    },

	// Supprimer un projet avec une matière donné
    DelProjetByMatiere:function(id) {
        return connection.query("delete from projet where matiereprojet=?", [id])
    }

};
module.exports=Projet;
