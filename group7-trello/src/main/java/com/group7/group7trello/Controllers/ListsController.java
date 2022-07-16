package com.group7.group7trello.Controllers;

import com.group7.group7trello.Models.Lists;
import com.group7.group7trello.Models.Ticket;
import com.group7.group7trello.Services.ListsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/lists")
public class ListsController {

    @Autowired
    ListsService listsService;

    @GetMapping(value = "/get/{name}/{id}")
    public Optional<Lists> getByID(@PathVariable("name") String name, @PathVariable("id") Long id){
        return listsService.getByListNameAndBoardID(name, id);
    }
}
