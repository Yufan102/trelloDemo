package com.group7.group7trello.Models;

import javax.persistence.*;
import java.util.*;

@Entity
public class TicketLabels {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ticket_id")
    private Ticket ticket;

    @ManyToOne
    @JoinColumn(name = "label_id")
    private Labels label;
}
