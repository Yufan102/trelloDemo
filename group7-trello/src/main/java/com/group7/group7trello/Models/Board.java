package com.group7.group7trello.Models;
import javax.persistence.*;
import java.util.*;

@Entity
public class Board {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(length=50, nullable=false, unique=false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "workspace_id")
    private Workspace workspace;

    @OneToMany(mappedBy = "board_id")
    private Set<Ticket> tickets = new HashSet<>();
}
