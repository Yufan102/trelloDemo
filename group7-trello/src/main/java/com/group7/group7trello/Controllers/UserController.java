package com.group7.group7trello.Controllers;

import com.group7.group7trello.Models.User;
import com.group7.group7trello.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Qualifier("userServiceImpl")
    @Autowired
    UserService service;


    //Working
    @GetMapping("/test")
    public String testService() {
        return "Services is working";
    }

    @GetMapping("/getID")
    public Optional<User> getUserByID(Long id){
        return service.getUserByID(id);
    }

    //Working
    @GetMapping("/getEmail")
    public User getUser(String email) {
        return service.getUser(email);
    }

    //Working
    @PostMapping(value = "/create")
    public User createUser(@RequestBody User user){
        return service.createUser(user);
    }

    //Working
    //To delete a user, you have to provide the not null value in DB
    @DeleteMapping(value = "/delete")
    public void deleteUser(@RequestBody User user){
        service.deleteUser(user);
    }


}
