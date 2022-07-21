package com.group7.group7trello.Models;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.*;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    @ManyToOne()
    @JoinColumn(name = "assign_user_id")
    @JsonManagedReference
    private User assign_user_id;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "list_id")
    private Lists list_id;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "sprint_id")
    private Sprint sprint_id;

    @ManyToOne()
    @JoinColumn(name = "report_to_id")
    @JsonManagedReference
    private User report_to_id;

    @Column(length=50, nullable=false, unique=false)
    private String name;

    @OneToMany(mappedBy = "ticket")
    private Set<TicketLabels> ticketLabels = new HashSet<>();

    @Column(length=50, nullable=true, unique=false)
    private int story_points;

    @CreationTimestamp
    @Column(nullable=false, unique=false)
    private Date created_on;

    @Column(nullable=true, unique=false)
    private Date deadline;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getAssign_user_id() {
        return assign_user_id;
    }

    public void setAssign_user_id(User assign_user_id) {
        this.assign_user_id = assign_user_id;
    }

    public Lists getList_id() {
        return list_id;
    }

    public void setList_id(Lists list_id) {
        this.list_id = list_id;
    }

    public Sprint getSprint_id() {
        return sprint_id;
    }

    public void setSprint_id(Sprint sprint_id) {
        this.sprint_id = sprint_id;
    }

    public User getReport_to_id() {
        return report_to_id;
    }

    public void setReport_to_id(User report_to_id) {
        this.report_to_id = report_to_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<TicketLabels> getTicketLabels() {
        return ticketLabels;
    }

    public void setTicketLabels(Set<TicketLabels> ticketLabels) {
        this.ticketLabels = ticketLabels;
    }

    public int getStory_points() {
        return story_points;
    }

    public void setStory_points(int story_points) {
        this.story_points = story_points;
    }

    public Date getCreated_on() {
        return created_on;
    }

    public void setCreated_on(Date created_on) {
        this.created_on = created_on;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }
}
