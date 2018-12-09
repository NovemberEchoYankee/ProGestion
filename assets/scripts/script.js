function formPromoOK (idItem, chemin) {

    var valueNom = window.document.promomodif.nom.value;

    if (valueNom == "")
        alert("Tous les champs ne sont pas remplis");
    else {
        modifyItem(idItem, chemin);
        window.document.getElementById("redirection").click();
    }
}

function formMatiereOK (idItem, chemin) {

    var valueNom = window.document.matieremodif.nom.value;

    if (valueNom == "")
        alert("Tous les champs ne sont pas remplis");
    else {
        modifyItem(idItem, chemin);
        window.document.getElementById("redirection").click();
    }
}

function formProjetOK (idItem, chemin) {

    var valueNom = window.document.projetModif.nom.value;
    var valueDescription = window.document.projetModif.description.value;
    var valueFonctionnalite = window.document.projetModif.fonctionnalite.value;
    var valueMatiere = window.document.projetModif.matiere.value;
    if (valueNom == "" || valueDescription =="" || valueFonctionnalite == "")
        alert("Tous les champs ne sont pas remplis");
    else {
        modifyItem(idItem, chemin);
        window.document.getElementById("redirection").click();
    }
}

function formUserOK (idItem, chemin) {

    var valueNom = window.document.usermodif.nom.value;
    var valuePrenom = window.document.usermodif.prenom.value;
    var valueMail = window.document.usermodif.mail.value;

    var expr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (valueNom =="" || valuePrenom =="" || valueMail =="")
        alert("Tous les champs ne sont pas remplis");
    else if(!expr.test(valueMail))
        alert("Veuillez renseigner une adresse email");
    else {
        modifyItem(idItem, chemin);
        window.document.getElementById("redirection").click();
    }
}

function confirmBeforeDelete(idItem, chemin) {
    var txt;
    var r = confirm("Attention, supprimer cet élément entrainera la suppression des éléments associés.");
    if (r == true) {
        deleteItem(idItem, chemin)
    }
}

function confirmBeforeDeleteAdmin(idItem, chemin) {
    var txt;
    var r = confirm("Attention, vous êtes sur le point de supprimer un administrateur. Êtes-vous sûr ?");
    if (r == true) {
        deleteItem(idItem, chemin)
    }
}

function deleteItem(idItem, chemin) {
	$.ajax({
		url:"http://localhost:8080/"+chemin+idItem,
		type: 'delete',
    });
}

//Valide le projet
function validate(idItem, chemin) {
	$.ajax({
		url:"http://localhost:8080/"+chemin+"validate/"+idItem,
		type: 'put',
    });
}

function modifyItem(idItem, chemin) {
    $.ajax({
        //url: "http://qrcode.guillaumeperes.fr/"+chemin+idItem,
        url:"http://localhost:8080/"+chemin+idItem,
        data: $("#form").serialize(),
        type: 'put',
    });
}

function CachePromo() {
    var x = document.getElementById("role").value;
    if(x=="ENSEIGNANT" || x=="ADMINISTRATION")
    {
        document.getElementById("promovisible").style.visibility = "hidden";
    }
}

