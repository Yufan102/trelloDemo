package com.group7.group7trello.Controllers;

import com.group7.group7trello.Models.Workspace;
import com.group7.group7trello.Services.WorkspaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Controller
@RestController
@RequestMapping("/api/workspace")
public class WorkspaceController {
    @Autowired
    WorkspaceService workspaceService;

    @GetMapping(value = "/getAll",produces = "application/json")
    public List<Workspace> getAllWorkSpace(){
        List<Workspace> workspaces = workspaceService.findAll();
        return workspaces;
    }

    @GetMapping(value = "/get/{id}", produces = "application/json")
    public Optional<Workspace> getByID(@PathVariable("id") Long id){return workspaceService.getByID(id);}

    //if deleted, will return True
    @DeleteMapping("/delete")
    public Map<String, Boolean> delete(Workspace workspace){
        return workspaceService.delete(workspace);
    }

    @PostMapping("/add")
    public Workspace add(Workspace workspace){
        return workspaceService.add(workspace);
    }
}
