package com.group7.group7trello.Models;
import javax.persistence.*;
import java.util.*;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "assign_user_id")
    private User assign_user_id;

    @ManyToOne
    @JoinColumn(name = "board_id")
    private User board_id;

    @ManyToOne
    @JoinColumn(name = "sprint_id")
    private User sprint_id;

    @ManyToOne
    @JoinColumn(name = "report_to_id")
    private User report_to_id;

    @Column(length=50, nullable=false, unique=true)
    private String name;

    @Column(length=50, nullable=false, unique=false)
    private String label;

    @Column(length=50, nullable=true, unique=false)
    private int story_points;

    @Column(nullable=false, unique=false)
    private Date created_on;

    @Column(nullable=true, unique=false)
    private Date deadline;
}
