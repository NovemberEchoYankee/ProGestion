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
@Table(name = "users")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Users.findAll", query = "SELECT u FROM Users u")
    , @NamedQuery(name = "Users.findByIdU", query = "SELECT u FROM Users u WHERE u.idU = :idU")
    , @NamedQuery(name = "Users.findByUsernameU", query = "SELECT u FROM Users u WHERE u.usernameU = :usernameU")
    , @NamedQuery(name = "Users.findByPasswordU", query = "SELECT u FROM Users u WHERE u.passwordU = :passwordU")
    , @NamedQuery(name = "Users.findByNomU", query = "SELECT u FROM Users u WHERE u.nomU = :nomU")
    , @NamedQuery(name = "Users.findByPrenomU", query = "SELECT u FROM Users u WHERE u.prenomU = :prenomU")
    , @NamedQuery(name = "Users.findByMailU", query = "SELECT u FROM Users u WHERE u.mailU = :mailU")
    , @NamedQuery(name = "Users.findByRoleU", query = "SELECT u FROM Users u WHERE u.roleU = :roleU")
    , @NamedQuery(name = "Users.findByPromotionU", query = "SELECT u FROM Users u WHERE u.promotionU = :promotionU")
    , @NamedQuery(name = "Users.findByGroupeU", query = "SELECT u FROM Users u WHERE u.groupeU = :groupeU")})
public class Users implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idU")
    private Integer idU;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 20)
    @Column(name = "usernameU")
    private String usernameU;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 60)
    @Column(name = "passwordU")
    private String passwordU;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "nomU")
    private String nomU;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "prenomU")
    private String prenomU;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "mailU")
    private String mailU;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 40)
    @Column(name = "roleU")
    private String roleU;
    @Column(name = "promotionU")
    private Integer promotionU;
    @Column(name = "groupeU")
    private Integer groupeU;

    public Users() {
    }

    public Users(Integer idU) {
        this.idU = idU;
    }

    public Users(Integer idU, String usernameU, String passwordU, String nomU, String prenomU, String mailU, String roleU, Integer promotionU, Integer groupeU) {
        this.idU = idU;
        this.usernameU = usernameU;
        this.passwordU = passwordU;
        this.nomU = nomU;
        this.prenomU = prenomU;
        this.mailU = mailU;
        this.roleU = roleU;
        this.promotionU = promotionU;
        this.groupeU = groupeU;
    }

    public Integer getIdU() {
        return idU;
    }
    public String getUsernameU() {
        return usernameU;
    }
    public String getPasswordU() {
        return passwordU;
    }
    public String getNomU() {
        return nomU;
    }
    public String getPrenomU() {
        return prenomU;
    }
    public String getMailU() {
        return mailU;
    }
    public String getRoleU() {
        return roleU;
    }
    public Integer getPromotionU() {
        return promotionU;
    }
    public Integer getGroupeU() {
        return groupeU;
    }
    
    public void setIdU(Integer idU) {
        this.idU = idU;
    }
    public void setUsernameU(String usernameU) {
        this.usernameU = usernameU;
    }
    public void setPasswordU(String passwordU) {
        this.passwordU = passwordU;
    }
    public void setNomU(String nomU) {
        this.nomU = nomU;
    }
    public void setPrenomU(String prenomU) {
        this.prenomU = prenomU;
    }
    public void setMailU(String mailU) {
        this.mailU = mailU;
    }
    public void setRoleU(String roleU) {
        this.roleU = roleU;
    }
    public void setPromotionU(Integer promotionU) {
        this.promotionU = promotionU;
    }
    public void setGroupeU(Integer groupeU) {
        this.groupeU = groupeU;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idU != null ? idU.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Users)) {
            return false;
        }
        Users other = (Users) object;
        if ((this.idU == null && other.idU != null) || (this.idU != null && !this.idU.equals(other.idU))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ressources.Users[ idU=" + idU + " ]";
    }
    
}
