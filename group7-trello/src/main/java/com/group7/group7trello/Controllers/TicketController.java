package com.group7.group7trello.Controllers;

import com.group7.group7trello.Models.Ticket;
import com.group7.group7trello.Models.User;
import com.group7.group7trello.Services.TicketService;
import com.group7.group7trello.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@RequestMapping("/api/ticket")
public class TicketController {
    @Autowired
    TicketService ticketService;

    @Autowired
    UserService userService;

    @GetMapping("/getAll")
    public List<Ticket> tickets(){
        return ticketService.getAll();
    }

    @GetMapping(value = "/get/{id}")
    public Optional<Ticket>getByID(@PathVariable("id")Long id){
        return ticketService.getByID(id);
    }

    @PostMapping(value = "/create", consumes = "application/json", produces = "application/json")
    public Ticket create(@RequestBody Map<String, String> creatingInfo){
        Ticket ticket = new Ticket();
        // Get the system date and time.
        java.util.Date utilDate = new Date();
        // Convert it to java.sql.Date
        java.sql.Date date = new java.sql.Date(utilDate.getTime());

        ticket.setCreated_on(date);
        ticket.setName(creatingInfo.get("name"));

        /*
        In the front end the Map must follow the right colum name in DB
        This loop is for optional data
         */
        for(String keys: creatingInfo.keySet()){
            if(keys.equals("story_points")){
                ticket.setStory_points(Integer.parseInt(creatingInfo.get("story_points")));
            }

            if(keys.equals("deadline")){

            }

            /*Labels will be stored as { "label" : "front,back" } which is separated by using comma
            if(keys.equals("label")){
                String[] labelsFromValue = creatingInfo.get("label").split(",");
                Set<TicketLabels> labels = Set.of(labelsFromValue);

                ticket.setTicketLabels(labels);
            }
             */


        }

        return ticketService.create(ticket);
    }

    @PostMapping(value = "/assign/{ticketID}/{userID}")
    public Ticket assignTicket(@PathVariable("ticketID") Long ticketID, @PathVariable("userID") Long userID){
        Optional<User> user = userService.getUserByID(userID);
        Optional<Ticket>ticket = ticketService.getByID(ticketID);

        if(user.isPresent() && ticket.isPresent()){
            Ticket changingTicket = ticket.get();

            changingTicket.setAssign_user_id(user.get());

            return ticketService.create(changingTicket);
        }

        return new Ticket();
    }

    @GetMapping(value = "display/{id}")
    public Map<String,Object> displayTicketWithDetails(@PathVariable Long id){
        ObjectMapper objectMapper = new ObjectMapper();

        Optional<Ticket> ticketOptional = ticketService.getByID(id);

        if(ticketOptional.isPresent()){
            Ticket getTicket = ticketOptional.get();

            Map<String, Object> map = objectMapper.convertValue(getTicket, Map.class);

            Date date = getTicket.getCreated_on();
            DateFormat df = new SimpleDateFormat("yyyy/MM/dd");
            String createdOn = df.format(date);
            String DDL = "";

            if(getTicket.getDeadline() != null){
                Date ddl = getTicket.getDeadline();
                DDL = df.format(ddl);
            }

            map.put("assign_id", getTicket.getAssign_user_id().getId());
            map.put("report_id", getTicket.getReport_to_id().getId());
            map.put("created_on", createdOn);
            map.put("deadline", DDL);

            return map;
        }

        return new HashMap<>();
    }
}
