package com.group7.group7trello.Models;
import javax.persistence.*;
import java.util.*;

@Entity
public class SecurityQuestion {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "question")
    private Questions question;

    @Column(length=500, nullable=false, unique=false)
    private String answer;

    @OneToMany(mappedBy = "security_question")
    private Set<User> Users = new HashSet<>();
}
