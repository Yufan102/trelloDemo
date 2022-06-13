package com.group7.group7trello.Models;
import javax.persistence.*;
import java.util.*;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(length=50, nullable=false, unique=false)
    private String first_name;

    @Column(length=50, nullable=false, unique=false)
    private String last_name;

    @Column(length=50, nullable=false, unique=true)
    private String email;

    @Column(length=50, nullable=false, unique=false)
    private String password;

    @ManyToOne
    @JoinColumn(name = "security_question")
    private SecurityQuestion security_question;

    @OneToMany(mappedBy = "user")
    private Set<UserRole> user_roles = new HashSet<>();

    @OneToMany(mappedBy = "assign_user_id")
    private Set<Ticket> report_tickets = new HashSet<>();

    @OneToMany(mappedBy = "report_to_id")
    private Set<Ticket> assign_tickets = new HashSet<>();


    public User() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public SecurityQuestion getSecurity_question() {
        return security_question;
    }

    public void setSecurity_question(SecurityQuestion security_question) {
        this.security_question = security_question;
    }

    public Set<UserRole> getUser_roles() {
        return user_roles;
    }

    public void setUser_roles(Set<UserRole> user_roles) {
        this.user_roles = user_roles;
    }

    public Set<Ticket> getReport_tickets() {
        return report_tickets;
    }
}
