var connection=require('../../config/dbconnection');

var Matiere={

    ObtAllMatieres:function(callback)
    {
        //return connection.query("select * from matiere", callback);	
		return connection.query("select m.*, p.nomP, u.nomU, u.prenomU "
		+ "from matiere m "
		+ "inner join users u ON m.enseignantM=u.id "
		+ "inner join promotion p on m.promotionM=p.idP "
		+ "Order by m.nomM", callback);
    },
    ObtAllMatieresOrdonneM:function(callback)
    {
        return connection.query("select m.*, p.nomP from matiere m LEFT JOIN promotion p ON m.promotionM=p.idP Order by m.nomM ASC", callback);
    },

    ObtAllMatieresByPromo:function(id, callback)
    {
        return connection.query("select * from matiere where promotionM=?", [id], callback);
    },
	
	ObtMatieresEnseignant:function(idEnseignant, callback)
    {
        return connection.query("select m.*, p.nomP, u.nomU, u.prenomU "
		+ "from matiere m "
		+ "inner join users u ON m.enseignantM=u.id "
		+ "inner join promotion p on m.promotionM=p.idP "
		+ "where enseignantM=? "
		+ "Order by m.nomM", [idEnseignant], callback);
    },

    ObtMatiereId:function(id, callback)
    {
        return connection.query("select * from matiere where idM=?", [id], callback);
    },

    PostMatiere: function(nom, promo, enseignant, callback){
        return connection.query("INSERT INTO matiere (nomM, promotionM, enseignantM) values (?,?,?)", [nom, promo, enseignant], callback);
    },

    PutMatiereId:function(id, nom, promo, enseignant, callback) {
        return connection.query("update matiere SET nomM=?, promotionM=?, enseignantM=? where idM=?", [nom, promo, enseignant, id], callback)
    },

    DelMatiereId:function(id) {
        return connection.query("delete from matiere where idM=?", [id])
    },
    DelMatiereByPromo : function (id) {
        return connection.query("delete from matiere where promotionM=?", [id])
    }
};
module.exports=Matiere;