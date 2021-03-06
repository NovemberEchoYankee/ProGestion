var connection=require('../../config/dbconnection');

var Users={
	
	//Récupérer tous les utilisateurs
    ObtAllUsers:function(callback)
    {
        return connection.query("select * from users u LEFT JOIN promotion p ON u.promotionU=p.idP Order by nomU, prenomU ASC", callback);
    },
	
	//Récupérer tous les enseignants
    ObtAllEnseignants:function(callback)
    {
        return connection.query("select * from users u LEFT JOIN promotion p ON u.promotionU=p.idP where u.roleU='ENSEIGNANT' Order by nomU, prenomU ASC", callback);
    },
	
	//Récupérer tous les étudiants
	ObtAllEtudiants:function(callback)
    {
        return connection.query("select * from users u LEFT JOIN promotion p ON u.promotionU=p.idP where u.roleU='ETUDIANT' Order by nomU, prenomU ASC", callback);
    },

	//Récupérer utilisateur par son ID
    ObtUserId:function(id, callback) {
        return connection.query("select u.*, p.nomP from users u LEFT JOIN promotion p ON u.promotionU=p.idP where u.id=? Order by nomU, prenomU ASC", [id], callback)
    },

	//Modifier utilisateur
    PutUserId:function(id, username, password, nom, prenom, mail, promo, callback) {
        return connection.query("update users SET username=?, password=?, nomU=?, prenomU=?, mailU=?, promotionU=? where id=?", [username, password, nom, prenom, mail, promo, id], callback)
    },

	//Supprimer utilisateur
    DelUserId:function(id) {
        return connection.query("delete from users where id=?", [id])
    },

	//Ajouter utilisateur
    AddUser:function(username, pass, prenom, nom, mail, role, promotion, groupe, callback) {
        return connection.query("INSERT INTO users ( username, password, prenomU, nomU, mailU, roleU, promotionU, groupeU) values (?,?,?,?,?,?,?,?)", [username, pass, prenom, nom, mail, role, promotion, groupe], callback);

    }
};
module.exports=Users;
