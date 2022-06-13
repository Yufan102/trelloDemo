package com.group7.group7trello.Models;
import javax.persistence.*;
import java.util.*;

@Entity
public class Labels {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(length=50, nullable=false, unique=false)
    private String label;

    @Column(length=50, nullable=false, unique=false)
    private String colour;

    @OneToMany(mappedBy = "label")
    private Set<TicketLabels> ticketLabels = new HashSet<>();
}
