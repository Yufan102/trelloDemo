package com.group7.group7trello.Controllers;

import com.group7.group7trello.Models.Workspace;
import com.group7.group7trello.Services.BoardService;
import com.group7.group7trello.Services.WorkspaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin("*")

@RestController
@RequestMapping("/api/workspace")
public class WorkspaceController {
    @Autowired
    WorkspaceService workspaceService;

    @Autowired
    BoardService boardService;

    @GetMapping(value = "/getAll")
    public List<Workspace> getAllWorkSpace(){
        return workspaceService.findAllByUserRole();
    }

    @GetMapping(value = "/get/{id}", produces = "application/json")
    public Optional<Workspace> getByID(@PathVariable("id") Long id){return workspaceService.getByID(id);}

    //if deleted, will return True
    @PostMapping("/delete")
    public Map<String, Boolean> delete(Workspace workspace){
        return workspaceService.delete(workspace);
    }

    @PostMapping("/add")
    public Workspace add(Workspace workspace){
        return workspaceService.createWorkspace(workspace);
    }
}
