package com.group7.group7trello.Controllers;

import com.group7.group7trello.Models.User;
import com.group7.group7trello.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService service;


    @GetMapping("/")
    public String testService() {
        return "Services is working";
    }

    @GetMapping("/getUser")
    public User getUser(String email) {
        return service.getUser(email);
    }

}
