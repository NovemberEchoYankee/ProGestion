var connection=require('../../config/dbconnection');

var Enseignant={

    /*ObtAllPromos:function(callback)
    {
        return connection.query("select * from promotion", callback);
    },*/

	//Récupérer un étudiant grâce à son ID
    ObtEtuId:function(id, callback)
    {
        return connection.query("select * from seance where idS=?", [id], callback);
    },
	
	//Récupérer les projets de l'étudiant grâce à la matiere, à revoir !
	ObtProjetsByMatiere:function(id, matiere)
	{
		return connection.query("select * from projet where matiereProjet = m.idM ")
	}

    /*PutUserId:function(id, nom, prenom, mail, promo, callback) {
        return connection.query("update users SET nomU=?, prenomU=?, mailU=?, promotionU=? where id=?", [nom, prenom, mail, promo, id], callback)
    },

    DelPromoId:function(id) {
        return connection.query("delete from promotion where idP=?", [id])
    }*/

};
module.exports=Enseignant;
