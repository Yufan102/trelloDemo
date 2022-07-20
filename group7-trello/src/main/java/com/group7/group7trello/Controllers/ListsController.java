package com.group7.group7trello.Controllers;

import com.group7.group7trello.Models.Lists;
import com.group7.group7trello.Models.Ticket;
import com.group7.group7trello.Services.ListsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/lists")
public class ListsController {

    @Autowired
    ListsService listsService;

    @GetMapping(value = "/get/{name}/{id}")
    public Set<Ticket> getByID(@PathVariable("name") String name, @PathVariable("id") Long id){
        return listsService.getByListNameAndBoardID(name, id).get().getTickets();
    }
}