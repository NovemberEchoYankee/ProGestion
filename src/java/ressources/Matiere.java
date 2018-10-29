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
@Table(name = "matiere")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Matiere.findAll", query = "SELECT m FROM Matiere m")
    , @NamedQuery(name = "Matiere.findByIdM", query = "SELECT m FROM Matiere m WHERE m.idM = :idM")
    , @NamedQuery(name = "Matiere.findByLibelleM", query = "SELECT m FROM Matiere m WHERE m.libelleM = :libelleM")
    , @NamedQuery(name = "Matiere.findByPromotionM", query = "SELECT m FROM Matiere m WHERE m.promotionM = :promotionM")
    , @NamedQuery(name = "Matiere.findByProjetM", query = "SELECT m FROM Matiere m WHERE m.projetM = :projetM")})
public class Matiere implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idM")
    private Integer idM;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "libelleM")
    private String libelleM;
    @Column(name = "promotionM")
    private Integer promotionM;
    @Column(name = "projetM")
    private Integer projetM;

    public Matiere() {
    }

    public Matiere(Integer idM) {
        this.idM = idM;
    }

    public Matiere(Integer idM, String libelleM, Integer promotionM, Integer projetM) {
        this.idM = idM;
        this.libelleM = libelleM;
        this.promotionM = promotionM;
        this.projetM = projetM;
    }

    public Integer getIdM() {
        return idM;
    }
    
     public String getLibelleM() {
        return libelleM;
    }
     
     public Integer getPromotionM() {
        return promotionM;
    } 
     
    public Integer getProjetM() {
        return projetM;
    }

    public void setIdM(Integer idM) {
        this.idM = idM;
    }
    
    public void setLibelleM(String libelleM) {
        this.libelleM = libelleM;
    }

    public void setPromotionM(Integer promotionM) {
        this.promotionM = promotionM;
    }

    public void setProjetM(Integer projetM) {
        this.projetM = projetM;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idM != null ? idM.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Matiere)) {
            return false;
        }
        Matiere other = (Matiere) object;
        if ((this.idM == null && other.idM != null) || (this.idM != null && !this.idM.equals(other.idM))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ressources.Matiere[ idM=" + idM + " ]";
    }
    
    public String toJson(){
            return "{\"idM\": \""+idM+
                    "\", \"libelleM\": \""+libelleM+
                    "\", \"promotionM\": \""+promotionM+
                    "\", \"projetM\": \""+projetM+"\"}";
    }
    
}
