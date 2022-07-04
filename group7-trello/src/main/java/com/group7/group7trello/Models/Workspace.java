package com.group7.group7trello.Models;
import com.group7.group7trello.Services.BoardService;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "workspace")
public class Workspace {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(length=50, nullable=false, unique=false)
    private String name;

    @OneToMany(mappedBy = "workspace",cascade = CascadeType.ALL)
    private Set<Board> boards = new HashSet<>();

    @OneToMany(mappedBy = "workspace")
    private Set<UserRole> user_Roles = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Board> getBoards() {
        return boards;
    }

    public void setBoards(Set<Board> boards) {
        this.boards = boards;
    }

    public void addBoard(Board board)
    {
        this.boards.add(board);
    }
    public Set<UserRole> getUser_Roles() {
        return user_Roles;
    }

    public void setUser_Roles(Set<UserRole> user_Roles) {
        this.user_Roles = user_Roles;
    }


}
