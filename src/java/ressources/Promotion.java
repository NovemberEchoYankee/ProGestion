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
@Table(name = "promotion")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Promotion.findAll", query = "SELECT p FROM Promotion p")
    , @NamedQuery(name = "Promotion.findByIdPromo", query = "SELECT p FROM Promotion p WHERE p.idPromo = :idPromo")
    , @NamedQuery(name = "Promotion.findByLibellePromo", query = "SELECT p FROM Promotion p WHERE p.libellePromo = :libellePromo")})
public class Promotion implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idPromo")
    private Integer idPromo;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 20)
    @Column(name = "libellePromo")
    private String libellePromo;

    public Promotion() {
    }

    public Promotion(Integer idPromo) {
        this.idPromo = idPromo;
    }

    public Promotion(Integer idPromo, String libellePromo) {
        this.idPromo = idPromo;
        this.libellePromo = libellePromo;
    }

    public Integer getIdPromo() {
        return idPromo;
    }

    public void setIdPromo(Integer idPromo) {
        this.idPromo = idPromo;
    }

    public String getLibellePromo() {
        return libellePromo;
    }

    public void setLibellePromo(String libellePromo) {
        this.libellePromo = libellePromo;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idPromo != null ? idPromo.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Promotion)) {
            return false;
        }
        Promotion other = (Promotion) object;
        if ((this.idPromo == null && other.idPromo != null) || (this.idPromo != null && !this.idPromo.equals(other.idPromo))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ressources.Promotion[ idPromo=" + idPromo + " ]";
    }
    
    /**
     * 
     * @return json format
     */
    public String toJson(){
            return "{\"idPromotion\": \""+idPromo+
                    "\", \"libellePromo\": \""+libellePromo+"\"}";
    }
    
}
