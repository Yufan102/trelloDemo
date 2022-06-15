package com.group7.group7trello.Controllers;

import com.group7.group7trello.Models.User;
import com.group7.group7trello.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Qualifier("userServiceImpl")
    @Autowired
    UserService service;


    @GetMapping("/1")
    public String testService() {
        return "Services is working";
    }

    @GetMapping("/")
    public User getUser(String email) {
        return service.getUser(email);
    }
    @PostMapping(value = "/user")
    public User createUser(@RequestBody User user){
        return service.createUser(user);
    }


}
