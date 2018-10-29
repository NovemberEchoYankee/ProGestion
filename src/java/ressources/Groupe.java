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
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author yannb
 */
@Entity
@Table(name = "groupe")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Groupe.findAll", query = "SELECT g FROM Groupe g")
    , @NamedQuery(name = "Groupe.findByIdG", query = "SELECT g FROM Groupe g WHERE g.idG = :idG")
    , @NamedQuery(name = "Groupe.findByProjetG", query = "SELECT g FROM Groupe g WHERE g.projetG = :projetG")})
public class Groupe implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idG")
    private Integer idG;
    @Column(name = "projetG")
    private Integer projetG;

    public Groupe() {
    }

    public Groupe(Integer idG, Integer projetG) {
        this.idG = idG;
        this.projetG = projetG;
    }

    public Integer getIdG() {
        return idG;
    }
    
     public Integer getProjetG() {
        return projetG;
    }

    public void setIdG(Integer idG) {
        this.idG = idG;
    }

    public void setProjetG(Integer projetG) {
        this.projetG = projetG;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idG != null ? idG.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Groupe)) {
            return false;
        }
        Groupe other = (Groupe) object;
        if ((this.idG == null && other.idG != null) || (this.idG != null && !this.idG.equals(other.idG))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ressources.Groupe[ idG=" + idG + "\nprojetG="+ projetG + " ]";
    }
    
    
    public String toJson(){
            return "{\"idG\": \""+idG+
                    "\", \"projetG\": \""+projetG+"\"}";
    }
    
}
