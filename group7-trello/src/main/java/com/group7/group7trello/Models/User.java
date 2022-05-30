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
    private String FirstName;

    @Column(length=50, nullable=false, unique=false)
    private String LastName;

    @Column(length=50, nullable=false, unique=true)
    private String email;

    @Column(length=50, nullable=false, unique=false)
    private String password;

    @OneToMany(mappedBy = "user")
    private Set<UserRole> user_roles = new HashSet<>();

    @OneToMany(mappedBy = "assign_user_id")
    private Set<Ticket> report_tickets = new HashSet<>();

    @OneToMany(mappedBy = "report_to_id")
    private Set<Ticket> assign_tickets = new HashSet<>();
}
