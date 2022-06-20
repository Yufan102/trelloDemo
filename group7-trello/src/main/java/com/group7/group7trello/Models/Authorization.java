package com.group7.group7trello.Models;
import javax.persistence.*;
import java.util.*;

@Entity
public class Authorization {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(length=100, nullable=false, unique=true)
    private String UUID;

    @Column(nullable=false, unique=false)
    private Date expiration;

    public Authorization() {
    }

    public Authorization(User user, String UUID, Date expiration) {
        this.user = user;
        this.UUID = UUID;
        this.expiration = expiration;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getUuid() {
        return UUID;
    }

    public void setUuid(String UUID) {
        this.UUID = UUID;
    }

    public Date getExpiration() {
        return this.expiration;
    }

    public void setExpiration(Date created_on) {
        this.expiration = created_on;
    }
}
