package com.group7.group7trello.Models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.*;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "assign_user_id")
    private User assign_user_id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "list_id")
    private Lists list_id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "sprint_id")
    private Sprint sprint_id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "report_to_id")
    private User report_to_id;

    @Column(length=50, nullable=false, unique=true)
    private String name;

    @OneToMany(mappedBy = "ticket")
    private Set<TicketLabels> ticketLabels = new HashSet<>();

    @Column(length=50, nullable=true, unique=false)
    private int story_points;

    @Column(nullable=false, unique=false)
    private Date created_on;

    @Column(nullable=true, unique=false)
    private Date deadline;
}
