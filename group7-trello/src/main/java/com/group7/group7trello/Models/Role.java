package com.group7.group7trello.Models;
import javax.persistence.*;
import java.util.*;

@Entity
public class Role {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(length=50, nullable=false, unique=false)
    private String name;

    @OneToMany(mappedBy = "role")
    private Set<UserRole> user_roles = new HashSet<>();
}
