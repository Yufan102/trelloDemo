package com.group7.group7trello.Models;
import javax.persistence.*;
import java.util.*;

@Entity
public class Questions {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(length=500, nullable=false, unique=false)
    private String question;

    @OneToMany(mappedBy = "question")
    private Set<SecurityQuestion> securityQuestions = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public Set<SecurityQuestion> getSecurityQuestions() {
        return securityQuestions;
    }

    public void setSecurityQuestions(Set<SecurityQuestion> securityQuestions) {
        this.securityQuestions = securityQuestions;
    }
}