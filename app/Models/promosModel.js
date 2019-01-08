var connection=require('../../config/dbconnection');

var Promos={

	//Obtenir toutes les promotions
    ObtAllPromos:function(callback)
    {
        return connection.query("select * from promotion order by nomP", callback);
    },

	//Obtenir une promotion grâce à son identifiant
    ObtPromoId:function(id, callback)
    {
        return connection.query("select * from promotion where idP=? order by nomP", [id], callback);
    },

	//Modifier le nom d'une promotion grâce à son id 
    PutPromoId:function(id, nom, callback) {
        return connection.query("update promotion SET nomP=? where idP=?", [nom, id], callback)
    },

	//Supprimer une promotion grâce à son ID
    DelPromoId:function(id) {
        return connection.query("delete from promotion where idP=?", [id])
    },

	//Ajouter une promotion
    AddPromoId:function(nomP, callback) {
        return connection.query("INSERT INTO promotion(nomP) VALUES (?)", [nomP], callback)
    }

};
module.exports=Promos;
