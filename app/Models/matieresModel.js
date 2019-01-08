var connection=require('../../config/dbconnection');

var Matiere={

	//Obtenir toutes les matières
    ObtAllMatieres:function(callback)
    {
        //return connection.query("select * from matiere", callback);	
		return connection.query("select m.*, p.nomP, u.nomU, u.prenomU "
		+ "from matiere m "
		+ "inner join users u ON m.enseignantM=u.id "
		+ "inner join promotion p on m.promotionM=p.idP "
		+ "Order by m.nomM", callback);
    },
	
	//Obtenir toutes les matières ordonnées par le nom
    ObtAllMatieresOrdonneM:function(callback)
    {
        return connection.query("select m.*, p.nomP from matiere m LEFT JOIN promotion p ON m.promotionM=p.idP Order by m.nomM ASC", callback);
    },

	//Obtenir toutes les matières d'une promotion grâce à son identifiant (promo)
    ObtAllMatieresByPromo:function(id, callback)
    {
        return connection.query("select * from matiere where promotionM=?", [id], callback);
    },
	
	//Obtenir toutes les matières d'un enseignant grâce à son id
	ObtMatieresEnseignant:function(idEnseignant, callback)
    {
        return connection.query("select m.*, p.nomP, u.nomU, u.prenomU "
		+ "from matiere m "
		+ "inner join users u ON m.enseignantM=u.id "
		+ "inner join promotion p on m.promotionM=p.idP "
		+ "where enseignantM=? "
		+ "Order by m.nomM", [idEnseignant], callback);
    },
	
	//Obtenir toutes les matières d'un étudiant grâce à son ID
	ObtMatieresEtudiant:function(idEtudiant, callback)
    {
        return connection.query("select m.*, p.nomP, u.nomU, u.prenomU "
		+ "from matiere m "
		+ "inner join promotion p on m.promotionM=p.idP "
		+ "inner join users u ON m.promotionM=u.promotionU "
		+ "where u.id=? "
		+ "Order by m.nomM", [idEtudiant], callback);
    },

	//Obtenir une matière grâce à son ID
    ObtMatiereId:function(id, callback)
    {
        return connection.query("select * from matiere where idM=?", [id], callback);
    },

	//Créer matiere
    PostMatiere: function(nom, promo, enseignant, callback){
        return connection.query("INSERT INTO matiere (nomM, promotionM, enseignantM) values (?,?,?)", [nom, promo, enseignant], callback);
    },

	//Modifier matiere
    PutMatiereId:function(id, nom, promo, enseignant, callback) {
        return connection.query("update matiere SET nomM=?, promotionM=?, enseignantM=? where idM=?", [nom, promo, enseignant, id], callback)
    },

	//Supprimer matiere grâce à son ID
    DelMatiereId:function(id) {
        return connection.query("delete from matiere where idM=?", [id])
    },
	
	//Supprimer toutes les matieres d'une promotion
    DelMatiereByPromo : function (id) {
        return connection.query("delete from matiere where promotionM=?", [id])
    }
};
module.exports=Matiere;