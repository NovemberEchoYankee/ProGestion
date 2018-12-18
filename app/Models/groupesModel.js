var connection=require('../../config/dbconnection');

var Groupe={
	
	// Obtenir tous les projets
	ObtAllGroupes:function(callback)
    {	
		return connection.query("select gr.* "
		+ "from groupe gr ", callback);
	},

	// Obtenir un projet avec id donné
    ObtGroupeId:function(id, callback) {
        return connection.query("select * from groupe where idG=?", [id], callback)
    },

	// Créer un groupe avec un projet et un étudiant
    PostGroupe: function(idProjet, idEtudiant, callback){
        return connection.query("INSERT INTO groupe (projetG, etudiantG) values (?,?)", [idProjet, idEtudiant], callback);
    },

};
module.exports=Groupe;
