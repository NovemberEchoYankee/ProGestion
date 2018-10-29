/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ressources;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author yannb
 */
@Entity
@Table(name = "projet")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Projet.findAll", query = "SELECT p FROM Projet p")
    , @NamedQuery(name = "Projet.findByIdProjet", query = "SELECT p FROM Projet p WHERE p.idProjet = :idProjet")
    , @NamedQuery(name = "Projet.findByNomProjet", query = "SELECT p FROM Projet p WHERE p.nomProjet = :nomProjet")
    , @NamedQuery(name = "Projet.findByDescriptionProjet", query = "SELECT p FROM Projet p WHERE p.descriptionProjet = :descriptionProjet")
    , @NamedQuery(name = "Projet.findByFonctionnaliteProjet", query = "SELECT p FROM Projet p WHERE p.fonctionnaliteProjet = :fonctionnaliteProjet")
    , @NamedQuery(name = "Projet.findByStatutProjet", query = "SELECT p FROM Projet p WHERE p.statutProjet = :statutProjet")
    , @NamedQuery(name = "Projet.findByMatiereProjet", query = "SELECT p FROM Projet p WHERE p.matiereProjet = :matiereProjet")})
public class Projet implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idProjet")
    private Integer idProjet;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "nomProjet")
    private String nomProjet;
    @Size(max = 1000)
    @Column(name = "descriptionProjet")
    private String descriptionProjet;
    @Size(max = 1000)
    @Column(name = "fonctionnaliteProjet")
    private String fonctionnaliteProjet;
    @Column(name = "statutProjet")
    private Boolean statutProjet;
    @Column(name = "matiereProjet")
    private Integer matiereProjet;

    public Projet() {
    }

    public Projet(Integer idProjet) {
        this.idProjet = idProjet;
    }

    public Projet(Integer idProjet, String nomProjet, String descriptionProjet, String fonctionnaliteProjet, Boolean statutProjet, Integer matiereProjet) {
        this.idProjet = idProjet;
        this.nomProjet = nomProjet;
        this.descriptionProjet = descriptionProjet;
        this.fonctionnaliteProjet = fonctionnaliteProjet;
        this.statutProjet = statutProjet;
        this.matiereProjet = matiereProjet;
    }

    public Integer getIdProjet() {
        return idProjet;
    }

    public void setIdProjet(Integer idProjet) {
        this.idProjet = idProjet;
    }

    public String getNomProjet() {
        return nomProjet;
    }

    public void setNomProjet(String nomProjet) {
        this.nomProjet = nomProjet;
    }

    public String getDescriptionProjet() {
        return descriptionProjet;
    }

    public void setDescriptionProjet(String descriptionProjet) {
        this.descriptionProjet = descriptionProjet;
    }

    public String getFonctionnaliteProjet() {
        return fonctionnaliteProjet;
    }

    public void setFonctionnaliteProjet(String fonctionnaliteProjet) {
        this.fonctionnaliteProjet = fonctionnaliteProjet;
    }

    public Boolean getStatutProjet() {
        return statutProjet;
    }

    public void setStatutProjet(Boolean statutProjet) {
        this.statutProjet = statutProjet;
    }

    public Integer getMatiereProjet() {
        return matiereProjet;
    }

    public void setMatiereProjet(Integer matiereProjet) {
        this.matiereProjet = matiereProjet;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idProjet != null ? idProjet.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Projet)) {
            return false;
        }
        Projet other = (Projet) object;
        if ((this.idProjet == null && other.idProjet != null) || (this.idProjet != null && !this.idProjet.equals(other.idProjet))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ressources.Projet[ idProjet=" + idProjet + " ]";
    }
    
    public String toJson(){
            return "{\"idProjet\": \""+idProjet+
                    "\", \"nomProjet\": \""+nomProjet+
                    "\", \"descriptionProjet\": \""+descriptionProjet+
                    "\", \"fonctionnaliteProjet\": \""+fonctionnaliteProjet+
                    "\", \"statutProjet\": \""+statutProjet+
                    "\", \"matiereProjet\": \""+matiereProjet+"\"}";
    }
    
}
