package com.group7.group7trello.Models;
import javax.persistence.*;

@Entity
public class UserRole {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    @ManyToOne
    @JoinColumn(name = "workspace_id")
    private Workspace workspace;
}
