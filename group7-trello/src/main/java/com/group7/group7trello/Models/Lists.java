package com.group7.group7trello.Models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.*;

@Entity
public class Lists {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(length=50, nullable=false, unique=false)
    private String name;

    @Column(length=50, nullable=true, unique=false)
    private int list_ordering;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    @OneToMany(mappedBy = "list_id")
    private Set<Ticket> tickets = new HashSet<>();

    public Lists(String name, int list_ordering, Board board) {
        this.name = name;
        this.list_ordering = list_ordering;
        this.board = board;
    }

    public Lists() {

    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getList_ordering() {
        return list_ordering;
    }

    public void setList_ordering(int list_ordering) {
        this.list_ordering = list_ordering;
    }

    public Board getBoard() {
        return board;
    }

    public void setBoard(Board board) {
        this.board = board;
    }

    public Set<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(Set<Ticket> tickets) {
        this.tickets = tickets;
    }
}

