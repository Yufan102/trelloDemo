package com.group7.group7trello.Models;
import javax.persistence.*;
import java.util.*;

@Entity
public class Sprint {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false, unique=false)
    private Date start_time;

    @Column(nullable=false, unique=false)
    private Date end_time;

    @OneToMany(mappedBy = "sprint_id")
    private Set<Ticket> tickets = new HashSet<>();
}
